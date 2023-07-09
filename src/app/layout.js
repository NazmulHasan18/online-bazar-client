import "./globals.css";
import { Inter } from "next/font/google";
import "sweetalert2/src/sweetalert2.scss";

import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import MainLayout from "./MainLayout";

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
            <MainLayout>{children}</MainLayout>
         </body>
      </html>
   );
}
