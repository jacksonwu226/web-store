import React, {useContext} from "react";
import { CartSidebarContext } from "../../contexts/CartSidebarContext";
// import {B} from 'react-icons/bs'
import { BsBag } from "react-icons/bs";

export default function Header() {
  const {isOpen, setIsOpen} = useContext(CartSidebarContext);
  
  return (
    <div>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)}>open/close sidebar</div>
    </div>
  );
}