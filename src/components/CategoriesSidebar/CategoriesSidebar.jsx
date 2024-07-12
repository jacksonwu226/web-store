import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CategoriesSidebarContext } from "../../contexts/CategoriesSidebarContext";
import { ProductContext } from "../../contexts/ProductContext";
import { IoMdArrowBack } from "react-icons/io";
import CategoryItem from "../CategoryItem/CategoryItem";

export default function CategoriesSidebar(){
  const {isOpen, handleClose} = useContext(CategoriesSidebarContext)
  const {categories} = useContext(ProductContext)
  return (
    <div className={`${isOpen ? 'left-0' : '-left-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className="flex items-center justify-between py-6 border-b mb-4">
        <div className="uppercase text-sm font-semibold">Categories</div>
          <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
            <IoMdArrowBack className="text-2xl" />
          </div>
      </div>
      <div className="flex flex-col gap-y-2 pb-4 overflow-y-auto overflow-x-hidden border-b">
        {categories.map((item) =>{
            return <CategoryItem key={item} name={item}/>
          })}
      </div>
    </div>
  );
}