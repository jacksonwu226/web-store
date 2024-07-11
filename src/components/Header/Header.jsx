import React, {useContext} from "react";
import { CartSidebarContext } from "../../contexts/CartSidebarContext";
import { BsBag } from "react-icons/bs";

export default function Header() {
  const {isOpen, setIsOpen} = useContext(CartSidebarContext);
  
  return (
    <header className="bg-pink-200">
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex relative">
        <BsBag className="text-2xl"/>
      </div>
    </header>
  );
}