import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import LoadingScreen from "../components/Loading/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  const { products, loading } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  if (loading) {
    return <LoadingScreen />; // Show loading screen while products are being fetched
  }

  const product = products.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto p-8 pt-32 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-6">Product Not Found</h1>
        <p className="text-red-600">Sorry, we couldn't find the product you were looking for.</p>
      </div>
    );
  }

  const { title, price, description, image } = product;
  return (
    <section className="pt-32 pb-32 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt={title} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-xl text-winter-blue-dark font-medium mb-6">$ {parseFloat(price).toFixed(2)}</div>
            <p className="mb-8">{description}</p>
            <button onClick={() => addToCart(product, product.id)} className="bg-primary py-4 px-8 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}