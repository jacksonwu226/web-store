import React, {useState, createContext} from "react";

export const CategoriesSidebarContext = createContext();

export default function CategoriesSidebarProvider({children}){
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  }
  return (
    <CategoriesSidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
      {children}
    </CategoriesSidebarContext.Provider>
  )
}