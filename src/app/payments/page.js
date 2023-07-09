/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
   const searchParam = useSearchParams();
   const price = searchParam.get("price");

   return (
      <div className="container mx-auto">
         <h2>payments</h2>
      </div>
   );
};

export default page;
