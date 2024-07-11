import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import CartItem from "../CartItem/CartItem";
import { CartSidebarContext } from "../../contexts/CartSidebarContext";
import { CartContext } from "../../contexts/CartContext";

export default function CartSidebar(){
  const {isOpen, handleClose} = useContext(CartSidebarContext);
  const {cart, clearCart, total} = useContext(CartContext);
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-640px overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) =>{
            return <CartItem item={item} key={item.id}/>;
          })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={clearCart} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
            <FiTrash2 />
          </div>
        </div>
        <Link className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium hover:bg-gray-200/70 transition duration-300">
          View Cart
        </Link>
        <Link className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium hover:bg-primary/70 transition duration-300">
          Checkout
        </Link>
      </div>
    </div>
  );
}