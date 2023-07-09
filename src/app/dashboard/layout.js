import React from "react";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";

const DashboardLayout = ({ children }) => {
   return (
      <div className="container mx-auto">
         <DashboardNavbar>{children}</DashboardNavbar>
      </div>
   );
};

export default DashboardLayout;
