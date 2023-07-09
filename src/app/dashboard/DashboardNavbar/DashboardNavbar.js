import Link from "next/link";
import React from "react";
import { FaDoorOpen } from "react-icons/fa";

const DashboardNavbar = ({ children }) => {
   return (
      <div className="drawer lg:drawer-open">
         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content relative">
            {children}
            <label
               htmlFor="my-drawer-2"
               className="btn btn-ghost drawer-button absolute text-3xl lg:hidden top-0 left-3"
            >
               <FaDoorOpen></FaDoorOpen>
            </label>
         </div>
         <div className="drawer-side rounded-xl mr-6">
            <div className="p-4 w-80 h-full bg-orange-600 text-white">
               <h2 className="text-xl font-semibold">Dashboard Panel</h2>
               <div className="divider bg-white py-[1px]"></div>
               <ul className="menu">
                  <li className="hover:text-white">
                     <Link href="/dashboard">Admin Home</Link>
                  </li>
                  <li className="hover:text-white">
                     <Link href="/dashboard">Customer List</Link>
                  </li>
                  <li className="hover:text-white">
                     <Link href="/dashboard/orderList">Order List</Link>
                  </li>
                  <li className="hover:text-white">
                     <Link href="/dashboard/manageProducts">Manage Product</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default DashboardNavbar;
