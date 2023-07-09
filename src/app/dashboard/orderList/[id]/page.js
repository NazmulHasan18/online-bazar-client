/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axiosInstance from "@/app/_api/axiosInstance";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const page = ({ params }) => {
   const router = useRouter();
   const [confirm, setConfirm] = useState("Confirm");
   const { data: cart = {}, isLoading } = useQuery({
      queryKey: ["order", params],
      queryFn: async () => {
         const data = await axiosInstance.get(`/cart/${params?.id}`);
         console.log(data.data);
         return data.data;
      },
   });
   const { img, name, price, quantity, seller, _id, stock, shipping } = cart;

   if (isLoading) {
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

   const handelConfirmed = () => {
      Swal.fire("Confirmed", "You Confirmed This Order.", "success");
      setConfirm("Confirmed");
   };

   const handelCancel = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            axiosInstance.delete(`/cart/${_id}`).then((res) => {
               console.log(res.data);
               if (res.data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  router.push("/dashboard/orderList");
               }
            });
         }
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
               <p>Quantity: {quantity}</p>
            </div>
            <div className="bg-orange-600 p-10 text-white">
               <h2 className="text-3xl">50% Discount on Featured Products </h2>
            </div>
            <p className="text-3xl">Seller: {seller}</p>
            <p className="text-6xl font-bold text-orange-500">{price}TK</p>

            <p className="text-lg">Shipping Charge: {shipping}</p>
            <p className="text-lg">Available Product: {stock}</p>
            <div className="flex gap-6 justify-between">
               <button
                  className="btn bg-orange-600 text-white text-lg w-1/2 hover:bg-orange-700 "
                  onClick={handelConfirmed}
               >
                  {confirm}
               </button>
               <button
                  className="btn bg-sky-500 text-white text-lg w-1/2 hover:bg-sky-700 "
                  onClick={handelCancel}
               >
                  Cancel
               </button>
            </div>
         </div>
      </div>
   );
};

export default page;
