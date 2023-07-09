"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./_Provider/AuthProvider/AuthProvider";
import Navbar from "./shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./shared/Footer/Footer";

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
               <Footer></Footer>
               <ToastContainer />
            </AuthProvider>
         </QueryClientProvider>
      </>
   );
};

export default MainLayout;
