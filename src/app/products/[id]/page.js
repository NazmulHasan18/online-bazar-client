/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Button from "@/app/components/Button";
import ButtonOutline from "@/app/components/ButtonOutline";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const page = ({ params }) => {
   const [loading, setLoading] = useState(true);
   const [product, setProduct] = useState({});

   const { img, ratingsCount, name, price, ratings, seller, _id, stock, shipping } = product;

   useEffect(() => {
      axios.get(`http://localhost:5000/product/${params.id}`).then((res) => {
         console.log(res.data);
         setProduct(res.data);
         setLoading(false);
      });
   }, [params]);

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
      <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto p-4">
         <figure>
            <Image src={img} alt="Album" width={600} height={600} className="w-auto h-auto" />
         </figure>
         <div className="card-body">
            <h2 className="text-4xl font-bold">{name}</h2>
            <div className="flex items-center gap-5 justify-normal">
               <ReactStars value={ratings} size={30} edit={false} />
               <p className="flex-grow-0">{ratingsCount} Ratings</p>{" "}
            </div>
            <div className="bg-orange-600 p-10 text-white">
               <h2 className="text-3xl">50% Discount on Featured Products </h2>
            </div>
            <p className="text-3xl">Seller: {seller}</p>
            <p className="text-6xl font-bold text-orange-500">{price}TK</p>

            <p className="text-lg">Shipping Charge: {shipping}</p>
            <p className="text-lg">Available Product: {stock}</p>
            <div className="flex gap-6 justify-between">
               <button className="btn bg-orange-600 text-white text-lg w-1/2 hover:bg-orange-700 ">
                  Buy Now
               </button>
               <button className="btn bg-sky-500 text-white text-lg w-1/2 hover:bg-sky-700 ">
                  Add To Cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default page;
