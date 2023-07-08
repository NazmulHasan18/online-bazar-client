import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./shared/Navbar/Navbar";
import AuthProvider from "./_Provider/AuthProvider/AuthProvider";
import "sweetalert2/src/sweetalert2.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "Online Bazar",
   description: "A trusted market place to connect",
   icons: {
      icon: "./favicon.png",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} bg-gray-100 min-h-screen`}>
            <AuthProvider>
               <header>
                  <Navbar></Navbar>
               </header>
               {children}
               <ToastContainer />
            </AuthProvider>
         </body>
      </html>
   );
}
