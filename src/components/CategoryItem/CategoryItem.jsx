import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { CategoriesSidebarContext } from "../../contexts/CategoriesSidebarContext"
export default function CategoryItem({name}){
  const {handleClose} = useContext(CategoriesSidebarContext);
  return(
    <div onClick={handleClose} className="flex gap-x-4 py-2 lg:px-6 w-full text-gray-500">
      <Link to={`/category/${name}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
        {name}
      </Link>
    </div>
  )
}