"use client";
import ButtonOutline from "@/app/components/ButtonOutline";
import Product from "@/app/products/Product";
import SectionTitle from "@/app/shared/SectionTitle/SectionTitle";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      axios.get("http://localhost:5000/products").then((res) => {
         setProducts(res.data.slice(0, 8));
      });
   }, []);

   return (
      <div>
         <SectionTitle title="Featured Products" subtitle="Trending Product On Sell"></SectionTitle>
         <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
            {products.map((product) => (
               <Product key={product._id} product={product}></Product>
            ))}
         </div>
         <div className="w-fit my-7 mx-auto">
            <Link href="products">
               <ButtonOutline>Show More </ButtonOutline>
            </Link>
         </div>
      </div>
   );
};

export default Products;
