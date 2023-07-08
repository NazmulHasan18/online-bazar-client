"use client";

import Button from "@/app/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
   const pathname = usePathname();
   console.log(pathname);

   const navLink = (
      <>
         <li>
            <Link href="/" className={`${pathname === "/" && "text-orange-600"} `}>
               Home
            </Link>
         </li>
         <li>
            <Link href="/login" className={`${pathname === "/login" && "text-orange-600"}`}>
               Login
            </Link>
         </li>
         <li>
            <a>Item 3</a>
         </li>

         <Button>Log Out</Button>
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
