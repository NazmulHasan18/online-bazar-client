"use client";
import React from "react";
import { FaStoreAlt, FaTruckLoading, FaUsers } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts";

const page = () => {
   const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

   const data = [
      {
         name: "Shoes",
         uv: 1200,
      },
      {
         name: "Pants",
         uv: 800,
      },
      {
         name: "Shirts",
         uv: 900,
      },
      {
         name: "Women Accessories",
         uv: 2080,
      },
      {
         name: "Home Accessories",
         uv: 1900,
      },
      {
         name: "Other Accessories",
         uv: 200,
      },
   ];

   const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
   };

   const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;

      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
   };

   return (
      <div className="container mx-auto">
         <h2 className="text-3xl font-bold">Hi! Welcome Back Admin.</h2>
         <div className="flex gap-4 items-center justify-between">
            <div className="card max-w-60 bg-gradient-to-r from-sky-500 to-sky-200 text-neutral-content">
               <div className="flex h-36 items-center text-center flex-row justify-center">
                  <GiWallet className="text-4xl w-1/3"></GiWallet>
                  <div className="card-actions text-gray-600 w-2/3">
                     <h2 className="text-3xl font-bold">1000</h2>
                     <p className="text-lg font-semibold">Revenue</p>
                  </div>
               </div>
            </div>
            <div className="card max-w-60 bg-gradient-to-r from-orange-500 to-orange-200 text-neutral-content">
               <div className="flex h-36 items-center text-center flex-row justify-center">
                  <FaUsers className="text-4xl w-1/3"></FaUsers>
                  <div className="card-actions text-gray-600 w-2/3">
                     <h2 className="text-3xl font-bold">1500+</h2>
                     <p className="text-lg font-semibold">Customers</p>
                  </div>
               </div>
            </div>
            <div className="card max-w-60 bg-gradient-to-r from-pink-500 to-pink-200 text-neutral-content">
               <div className="flex h-36 items-center text-center flex-row justify-center">
                  <FaStoreAlt className="text-4xl w-1/3"></FaStoreAlt>
                  <div className="card-actions text-gray-600 w-2/3">
                     <h2 className="text-3xl font-bold">2000+</h2>
                     <p className="text-lg font-semibold">Products</p>
                  </div>
               </div>
            </div>
            <div className="card max-w-60 bg-gradient-to-r from-amber-500 to-amber-200 text-neutral-content">
               <div className="flex h-36 items-center text-center flex-row justify-center">
                  <FaTruckLoading className="text-4xl w-1/3"></FaTruckLoading>
                  <div className="card-actions text-gray-600 w-2/3">
                     <h2 className="text-3xl font-bold">100+</h2>
                     <p className="text-lg font-semibold">Delivery</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="my-8">
            <h2 className="text-3xl font-semibold">Orders Complete In This Month</h2>
            <div>
               <BarChart
                  width={800}
                  height={300}
                  data={data}
                  margin={{
                     top: 20,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: "top" }}>
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                     ))}
                  </Bar>
               </BarChart>
            </div>
         </div>
      </div>
   );
};

export default page;
