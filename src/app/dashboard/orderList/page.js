/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import SectionTitle from "@/app/shared/SectionTitle/SectionTitle";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "@/app/_api/axiosInstance";
import { FaTrashAlt } from "react-icons/fa";

const page = () => {
   const { data: orders = [], isLoading } = useQuery({
      queryKey: ["orders"],
      queryFn: async () => {
         const data = await axiosInstance.get("/carts");
         console.log(data.data);
         return data.data;
      },
   });

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
      <div>
         <SectionTitle title="All Order List"></SectionTitle>
         <div>
            <div className="overflow-x-auto">
               <table className="table table-zebra-zebra">
                  {/* head */}
                  <thead>
                     <tr className="bg-white rounded-lg">
                        <th>#</th>
                        <th>Products Details</th>
                        <th>Customer</th>
                        <th>Action</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {orders.map((order, i) => (
                        <tr key={order._id}>
                           <td>{i + 1}</td>
                           <td>
                              <div className="flex items-center space-x-3">
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       <Image
                                          src={order.img}
                                          alt="Avatar Tailwind CSS Component"
                                          width={70}
                                          height={70}
                                       />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="font-bold">{order.name}</div>
                                    <div className="text-sm opacity-50">Price: {order.price}TK</div>
                                    <div className="text-sm opacity-50">Quantity: {order.quantity}</div>
                                 </div>
                              </div>
                           </td>
                           <td>User Email: {order.email}</td>
                           <td className="flex flex-col gap-2">
                              <button className="btn btn-warning btn-xs">Pending</button>
                              <button className="btn btn-info btn-xs">Details</button>
                              <button className="btn btn-error btn-xs">
                                 <FaTrashAlt></FaTrashAlt>
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default page;
