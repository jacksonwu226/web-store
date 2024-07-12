import React from "react";
import modelImageAnime from "../../assets/hero/hero-woman-anime.png"
import modelImage from "../../assets/hero/hero-woman-winter.png"
import { Link } from "react-router-dom";

export default function Hero(){
  return (
    <section className= "bg-winter-blue h-[800px] bg-hero bg-no-repeat bg-cover bg-center shadow-md">
      <div className="container mx-auto flex justify-around h-full ">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[3px] bg-red-500 mr-3"></div>
            New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            Winter Styles
          <br />
          <span>WOMENS</span>
          </h1>
          <Link to={`/category/women's clothing`} className="self-start uppercase font-semibold border-b-2 border-primary">
            Discover More
          </Link>
        </div>
        <div className="hidden lg:flex flex-col justify-end">
          <img className="object-cover max-w-full h-3/4" src={modelImageAnime} alt="" />
        </div>
      </div>
    </section>
  );
}