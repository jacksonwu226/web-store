import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { CartSidebarContext } from "../../contexts/CartSidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext";
import Logo from "../../assets/logo/svg/fake-store-high-resolution-logo-black-transparent.png"

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(CartSidebarContext);
  const {itemAmount} = useContext(CartContext);
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6' } fixed w-full z-10 transition-all`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={'/'}>
          <div>
            {/* 40px */}
            <img className="w-[100px]" src={Logo} alt="" /> 
          </div>
        </Link>
        {/* carts */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
          {/* 2xl */}
          <BsBag className="text-3xl"/>
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
        </div>
      </div>
    </header>
  );
}