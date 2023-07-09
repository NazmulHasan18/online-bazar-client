"use client";

import axiosInstance from "@/app/_api/axiosInstance";
import Button from "@/app/components/Button";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const Navbar = () => {
   const pathname = usePathname();
   const { user, logOut } = useAuth();

   const { data: carts } = useQuery({
      queryKey: ["carts", user],
      queryFn: async () => {
         const data = await axiosInstance.get(`/carts/${user?.email}`);
         return data.data;
      },
   });

   const handelLogOut = () => {
      logOut()
         .then(() => {
            Swal.fire({
               position: "center",
               icon: "success",
               title: "User Log Out Successful",
               showConfirmButton: false,
               timer: 1500,
            });
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const navLink = (
      <>
         <li>
            <Link href="/" className={`${pathname === "/" && "text-orange-600"} `}>
               Home
            </Link>
         </li>
         <li>
            <Link href="/products" className={`${pathname === "/products" && "text-orange-600"} `}>
               Products
            </Link>
         </li>
         {user ? (
            <>
               <li>
                  <Link href="/carts" className={`${pathname === "/carts" && "text-orange-600"} `}>
                     My Carts
                     <div className="badge badge-secondary">+{carts?.length || 0}</div>
                  </Link>
               </li>
               <li>
                  <Link href="/dashboard" className={`${pathname === "/dashboard" && "text-orange-600"} `}>
                     Dashboard
                  </Link>
               </li>
               <Button onClickFunction={handelLogOut}>Log Out</Button>
            </>
         ) : (
            <>
               <li>
                  <Link href="/login" className={`${pathname === "/login" && "text-orange-600"}`}>
                     Login
                  </Link>
               </li>
            </>
         )}
      </>
   );

   return (
      <nav className="navbar container mx-auto bg-white py-5 mb-4 rounded-xl">
         <>
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />
                     </svg>
                  </label>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
                  >
                     {navLink}
                  </ul>
               </div>
               <Link href="/" className="normal-case text-4xl">
                  <p>
                     <span className="bg-orange-600 py-2 px-5 text-white rounded-full">B</span>azar
                  </p>
               </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
               <ul className="menu menu-horizontal px-1 font-semibold items-center">{navLink}</ul>
            </div>
         </>
      </nav>
   );
};

export default Navbar;
