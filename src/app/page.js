"use client";
import Image from "next/image";
import Banner from "./home/Banner/Banner";
import Info from "./home/Info/Info";
import Products from "./home/Products/Products";

export const metadata = {
   title: "Online Bazar",
   description: "A trusted market place to connect",
   icons: {
      icon: "./favicon.png",
   },
};

export default function Home() {
   return (
      <main className="container mx-auto">
         <Banner></Banner>
         <Info></Info>
         <Products></Products>
         <h2>home page</h2>
      </main>
   );
}
