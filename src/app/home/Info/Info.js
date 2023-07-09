import React from "react";
import Image from "next/image";
import infoImg1 from "@/app/assets/icons/agent.png";
import infoImg2 from "@/app/assets/icons/box.png";
import infoImg3 from "@/app/assets/icons/client.png";
import infoImg4 from "@/app/assets/icons/fast-delivery.png";

const Info = () => {
   return (
      <div className="my-20 flex justify-around items-center">
         <div className="card w-60 h-60 rounded-full bg-gray-200 shadow-xl hover:bg-orange-200">
            <div className="card-body flex flex-col items-center justify-center">
               <Image src={infoImg3} alt="" width={70} height={70}></Image>
               <h2 className="text-3xl text-center font-semibold">2000+ Clients</h2>
            </div>
         </div>
         <div className="card w-60 h-60 rounded-full bg-purple-300 shadow-xl hover:bg-orange-200">
            <div className="card-body flex flex-col items-center justify-center">
               <Image src={infoImg2} alt="" width={70} height={70}></Image>
               <h2 className="text-3xl text-center font-semibold">300+ Products</h2>
            </div>
         </div>
         <div className="card w-60 h-60 rounded-full bg-red-200 shadow-xl hover:bg-orange-200">
            <div className="card-body flex flex-col items-center justify-center">
               <Image src={infoImg4} alt="" width={70} height={70}></Image>
               <h2 className="text-3xl text-center font-semibold">Within Week Delivery</h2>
            </div>
         </div>
         <div className="card w-60 h-60 rounded-full bg-blue-200 shadow-xl hover:bg-orange-200">
            <div className="card-body flex flex-col items-center justify-center">
               <Image src={infoImg1} alt="" width={70} height={70}></Image>
               <h2 className="text-3xl text-center font-semibold">30+ Authorized Seller</h2>
            </div>
         </div>
      </div>
   );
};

export default Info;
