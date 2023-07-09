/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import ButtonOutline from "../components/ButtonOutline";
import { useForm } from "react-hook-form";
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
   const { signInWithEmailPass } = useAuth();
   const router = useRouter();

   const searchParams = useSearchParams();
   const from = searchParams.get("from") || "/";

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      signInWithEmailPass(data.email, data.password)
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            Swal.fire({
               position: "center",
               icon: "success",
               title: "User Logged in Successful",
               showConfirmButton: false,
               timer: 1500,
            });
            router.push(from);
            console.log(user);
         })
         .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
         });
   };

   return (
      <div className="hero min-h-screen rounded-xl bg-white container mx-auto">
         <div className="hero-content flex-col w-full">
            <div className="text-center">
               <h1 className="text-5xl font-bold text-orange-600 mb-6">Login now!</h1>
            </div>
            <form className="card w-full lg:w-1/2 shadow-2xl bg-orange-50" onSubmit={handleSubmit(onSubmit)}>
               <div className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        {...register("email", { required: true })}
                     />
                     {errors.email && <span className="text-red-500">Email is required.</span>}
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        {...register("password", { required: true })}
                     />
                     {errors.password && <span className="text-red-500">Password is required.</span>}
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                           Forgot password?
                        </a>
                     </label>
                  </div>

                  <p>
                     New Here
                     <Link href="/register" className="btn pl-2 btn-link normal-case">
                        Sign Up!
                     </Link>
                  </p>

                  <div className="form-control mt-6">
                     <ButtonOutline>Login</ButtonOutline>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default page;
