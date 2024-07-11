import React, {useContext} from "react";
import {ProductContext} from "../contexts/ProductContext"
import Product from "../components/Product/Product";
import Hero from "../components/Hero/Hero";

export default function Home() {
  const {products} = useContext(ProductContext);
  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:max-0">
            {filteredProducts.map((product) => {
                return <Product key={product.id} product={product}/>
              })}
          </div>
        </div>
      </section>
    </div>
  );
}