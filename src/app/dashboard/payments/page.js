/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ButtonOutline from "@/app/components/ButtonOutline";
import SectionTitle from "@/app/shared/SectionTitle/SectionTitle";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FaCreditCard } from "react-icons/fa";

const page = () => {
   const searchParam = useSearchParams();
   const price = searchParam.get("price");

   return (
      <div className="container mx-auto flex flex-col justify-center items-center h-[80vh]">
         <SectionTitle title="Payments" subtitle={`Ready To Payment ${price}TK`}></SectionTitle>
         <div className="flex gap-5 mb-8">
            <input
               type="text"
               placeholder="&#x1f4b3; Card Number"
               className="input input-bordered input-warning w-full"
            />
            <input type="text" placeholder="MM/YYYY" className="input input-bordered input-warning w-full " />
         </div>

         <ButtonOutline>Pay Now</ButtonOutline>
      </div>
   );
};

export default page;
