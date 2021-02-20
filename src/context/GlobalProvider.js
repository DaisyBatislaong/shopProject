import React, { createContext, useReducer } from "react";
import { useDataProducts } from "../data/useDataProducts";

const NavInitialState = {
   isLogin: false,
   showModal: false,
   buttonClicked: false,
};

export const GlobalContext = createContext();

const NavReducer = (state, action) => {
   switch (action.type) {
      case "SETLOGIN":
         return { ...state, isLogin: !state.isLogin };
      case "SETMODAL":
         return { ...state, showModal: !state.showModal };
      case "SETBUTTON":
         return { ...state, buttonClicked: !state.buttonClicked };
      case "LOGINMODAL":
         return { ...state, showModal: !state.showModal, isLogin: !state.isLogin };
      case "RESET":
         return { ...state, isLogin: false, showModal: false, buttonClicked: false };
      default:
         return state;
   }
};

export const GlobalProvider = ({ children }) => {
   const [navstate, dispatch] = useReducer(NavReducer, NavInitialState);
   return <GlobalContext.Provider value={[navstate, dispatch]}>{children}</GlobalContext.Provider>;
};
