import React, {useState, createContext} from "react";

export const CartSidebarContext = createContext();

export default function CartSidebarProvider({children}){
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }
  return (
     <CartSidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
      {children}
    </CartSidebarContext.Provider>
  );
}