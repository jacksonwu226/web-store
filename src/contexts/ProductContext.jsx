import React, {createContext, useState, useEffect} from "react";

// create context

export const ProductContext = createContext();

export default function ProductProvider({children}) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, [])

  return (
    <ProductContext.Provider value={{products, categories}}>
      {children}
    </ProductContext.Provider>
  );
}
