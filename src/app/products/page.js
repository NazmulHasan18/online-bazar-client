/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const page = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/products")
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);
   return (
      <div className="py-6 container mx-auto">
         <div className="grid grid-cols-4 gap-4 justify-around">
            {products.map((product) => (
               <Product key={product._id} product={product}></Product>
            ))}
         </div>
      </div>
   );
};

export default page;
