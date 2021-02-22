import React, { useContext } from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";
import CartProduct from "./CartProduct";
import TotalPrice from "./TotalPrice";
import { ProductContext } from "../context/ProductProvider";

const Background = styled.div`
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.6);
   position: fixed;
   top: 0;
   z-index: 20;
   display: flex;
   justify-content: flex-end;
`;

const CartModal = ({ cartClicked, setCartClicked }) => {
   const [productstate, dispatch] = useContext(ProductContext);
   return (
      <>
         {cartClicked ? (
            <Background>
               <div className="w-1/3 bg-white overflow-y-scroll">
                  <div className="bg-black text-white flex items-center py-8 space-x-20">
                     <div
                        className="ml-8"
                        onClick={() => {
                           setCartClicked();
                        }}
                     >
                        <AiOutlineRight size="1.5rem" />
                     </div>
                     <h5 className="">Cart</h5>
                  </div>
                  {productstate.cartItems.length === 0 ? (
                     <h6 className="text-center mt-12">Cart is Empty</h6>
                  ) : (
                     <div className="flex flex-col">
                        <CartProduct />
                        <TotalPrice />
                        <button className="self-center px-24 py-3 bg-gray-400">View Cart</button>
                     </div>
                  )}
               </div>
            </Background>
         ) : null}
      </>
   );
};

export default CartModal;
