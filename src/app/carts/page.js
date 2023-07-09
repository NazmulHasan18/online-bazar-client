/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useQuery } from "react-query";
import axiosInstance from "../_api/axiosInstance";
import CartProduct from "./CartProduct";
import Link from "next/link";
import ButtonOutline from "../components/ButtonOutline";

const page = () => {
   const { user } = useAuth();

   const { data: carts = [], isLoading } = useQuery({
      queryKey: ["carts", user],
      queryFn: async () => {
         const data = await axiosInstance.get(`/carts/${user.email}`);
         return data.data;
      },
   });

   const totalPrice = carts.reduce((prevSum, cart) => prevSum + cart.price * cart.quantity, 0);
   const totalProduct = carts.reduce((prevSum, cart) => prevSum + cart.quantity, 0);

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

   return (
      <div className="container mx-auto">
         <h2 className="text-4xl text-center my-10 font-bold">
            My <span className="text-orange-600">Carts</span>
         </h2>
         <div className="flex gap-5 justify-between text-center mb-6">
            <h2 className="text-2xl font-bold">Total Added Products: {totalProduct}</h2>
            <h2 className="text-2xl font-bold">Total Price: {totalPrice}TK</h2>
            <Link href={`/dashboard/payments?price=${totalPrice}`}>
               <ButtonOutline>Pay Now</ButtonOutline>
            </Link>
         </div>
         <div className="grid gap-4 lg:grid-cols-2">
            {carts.map((cart) => (
               <CartProduct key={cart._id} cart={cart}></CartProduct>
            ))}
         </div>
      </div>
   );
};

export default page;
