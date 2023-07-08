"use client";
import Image from "next/image";
import Banner from "./home/Banner/Banner";

export default function Home() {
   return (
      <main className="container mx-auto">
         <Banner></Banner>
         <h2>home page</h2>
      </main>
   );
}
