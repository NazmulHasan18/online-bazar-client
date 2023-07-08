import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
   const { img, name, price, ratings, seller, _id } = product;
   return (
      <Link href={`products/${_id}`}>
         <div className="card bg-base-100 hover:shadow-xl mx-auto border">
            <figure className="m-3 mb-0">
               <Image src={img} alt={name} width={300} height={300} className="w-auto h-auto" />
            </figure>
            <div className="card-body">
               <h2 className="card-title">{name.length > 20 ? `${name.slice(0, 20)}...` : name}</h2>
               <h4 className="text-xl font-semibold">Seller: {seller}</h4>
               <p className="text-orange-600 font-semibold">Price: {price}Tk</p>
               <div className="flex items-center gap-5 justify-normal">
                  <ReactStars value={ratings} size={30} edit={false} />
                  <p className="flex-grow-0">{ratings}</p>{" "}
               </div>
            </div>
         </div>
      </Link>
   );
};

export default Product;
