/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axiosInstance from "@/app/_api/axiosInstance";
import Button from "@/app/components/Button";
import ButtonOutline from "@/app/components/ButtonOutline";
import useAuth from "@/app/hooks/useAuth";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Swal from "sweetalert2";

const page = ({ params }) => {
   const { user } = useAuth();
   const pathname = usePathname();
   const [loading, setLoading] = useState(true);
   const [product, setProduct] = useState({});

   const { img, ratingsCount, name, price, ratings, seller, _id, stock, shipping } = product;

   useEffect(() => {
      axios.get(`https://online-bazar-server-nazmulhasan18.vercel.app/product/${params.id}`).then((res) => {
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

   const handelAddToCart = () => {
      console.log("axios doing");
      axiosInstance.put(`cart/${_id}?email=${user.email}`, { product }).then((res) => {
         if (res.data.modifiedCount || res.data.insertedId) {
            Swal.fire({
               position: "center",
               icon: "success",
               title: "Product added to cart successful",
               showConfirmButton: false,
               timer: 1500,
            });
         }

         console.log(res.data);
      });
   };

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
               {user ? (
                  <button
                     className="btn bg-sky-500 text-white text-lg w-1/2 hover:bg-sky-700 "
                     onClick={handelAddToCart}
                  >
                     Add To Cart
                  </button>
               ) : (
                  <Link className="w-1/2" href={`/login?from=${pathname}`}>
                     <button className="btn bg-sky-500 text-white text-lg hover:bg-sky-700 w-full">
                        Add To Cart
                     </button>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default page;
