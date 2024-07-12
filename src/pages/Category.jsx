import React, {useEffect, useState} from "react";
import {ProductContext} from "../contexts/ProductContext"
import Product from "../components/Product/Product";
import { useParams } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";

export default function Category() {
  let {category} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, [category])
  
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:max-0">
            {products.map((product) => {
              return <Product key={product.id} product={product}/>
            })}
          </div>
        </div>
      </section>
    </div>
  );
}