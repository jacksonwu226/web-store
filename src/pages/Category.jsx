import React, {useEffect, useState} from "react";
import {ProductContext} from "../contexts/ProductContext"
import Product from "../components/Product/Product";
import { useParams } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";
import LoadingScreen from "../components/Loading/Loading";
import { Link } from "react-router-dom";

export default function Category() {
  let {category} = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        if (!response.status >= 400) {
          throw new Error("Server Error");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Hide loading screen when data is fetched
      }
    };
    fetchProducts();
  }, [category]);
  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-winter-blue-dark">Error: </h1>
        <p className="text-lg mb-6 text-gray-700">{error}</p>
        <Link 
        to="/" 
        className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/70 transition duration-300"
        >
        Go back home
        </Link>
      </div>
    );
  }

  if(loading){
      return <LoadingScreen />
  }

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