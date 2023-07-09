import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartProduct = ({ cart }) => {
   const { img, name, price, seller, _id, quantity } = cart;
   return (
      <div className="card mb-5 lg:card-side bg-base-100 items-center shadow-xl">
         <figure className="h-60 my-auto">
            <Image src={img} alt="Movie" width={300} height={200} className="p-6 h-64" />
         </figure>
         <div className="card-body flex-grow">
            <h2 className="text-3xl font-semibold">{name}</h2>
            <p className="text-2xl font-semibold text-orange-600">Price: {price}TK </p>
            <p className="text-xl font-semibold">Seller: {seller} </p>
            <p className="text-xl font-semibold">Quantity: {quantity} </p>
         </div>
         <div className="m-10 flex flex-row lg:flex-col gap-5">
            <Link href={`/products/${_id}`}>
               <button className="btn btn-success">Details</button>
            </Link>
            <Link href={`/dashboard/payments?price=${price * quantity}`}>
               <button className="btn btn-warning">Pay Now</button>
            </Link>
            <button className="btn btn-error">Delete</button>
         </div>
      </div>
   );
};

export default CartProduct;
