"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./_Provider/AuthProvider/AuthProvider";
import Navbar from "./shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

const MainLayout = ({ children }) => {
   return (
      <>
         <QueryClientProvider client={queryClient}>
            <AuthProvider>
               <header>
                  <Navbar></Navbar>
               </header>
               {children}
               <ToastContainer />
            </AuthProvider>
         </QueryClientProvider>
      </>
   );
};

export default MainLayout;
