/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const page = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      fetch("https://online-bazar-server-nazmulhasan18.vercel.app/products")
         .then((res) => res.json())
         .then((data) => {
            setProducts(data);
            setLoading(false);
         });
   }, []);

   if (loading) {
      return (
         <div className="flex justify-center items-center h-[80vh]">
            <div>
               <span className="loading loading-spinner loading-lg text-primary"></span>
               <span className="loading loading-spinner loading-lg text-secondary"></span>
               <span className="loading loading-spinner loading-lg text-accent"></span>
               <span className="loading loading-spinner loading-lg text-neutral"></span>
               <span className="loading loading-spinner loading-lg text-info"></span>
               <span className="loading loading-spinner loading-lg text-success"></span>
               <span className="loading loading-spinner loading-lg text-warning"></span>
               <span className="loading loading-spinner loading-lg text-error"></span>
            </div>
         </div>
      );
   }

   return (
      <div className="py-6 container mx-auto">
         <h2 className="text-4xl text-center my-10 font-bold">
            All <span className="text-orange-600">Products</span>
         </h2>
         <div className="grid grid-cols-4 gap-4 justify-around">
            {products.map((product) => (
               <Product key={product._id} product={product}></Product>
            ))}
         </div>
      </div>
   );
};

export default page;
