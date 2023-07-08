import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./shared/Navbar/Navbar";

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
         <body className={`${inter.className} bg-gray-100`}>
            <header>
               <Navbar></Navbar>
            </header>
            {children}
         </body>
      </html>
   );
}
