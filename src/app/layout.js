"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./shared/Navbar/Navbar";
import AuthProvider from "./_Provider/AuthProvider/AuthProvider";
import "sweetalert2/src/sweetalert2.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} bg-gray-100 min-h-screen`}>
            <QueryClientProvider client={queryClient}>
               <AuthProvider>
                  <header>
                     <Navbar></Navbar>
                  </header>
                  {children}
                  <ToastContainer />
               </AuthProvider>
            </QueryClientProvider>
         </body>
      </html>
   );
}
