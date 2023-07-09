/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import ButtonOutline from "../components/ButtonOutline";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const page = () => {
   const { signUpWithEmailPass, updateUser } = useAuth();
   const router = useRouter();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      if (data.confirm_password === data.password) {
         signUpWithEmailPass(data.email, data.password)
            .then((userCredential) => {
               const user = userCredential.user;
               updateUser(data.name, data.photo_url)
                  .then(() => {
                     Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User Register Successful",
                        showConfirmButton: false,
                        timer: 1500,
                     });
                     router.push("/");
                     console.log(user);
                  })
                  .catch((error) => {
                     console.error(error);
                  });
            })
            .catch((error) => {
               const errorMessage = error.message;
               console.error(errorMessage);
            });
      } else {
         toast.success("Confirm Password Does not Match");
      }
   };

   return (
      <div className="hero min-h-screen rounded-xl bg-white container mx-auto">
         <div className="hero-content flex-col w-full">
            <div className="text-center">
               <h1 className="text-5xl font-bold text-orange-600 mb-6">Register!</h1>
            </div>
            <form className="card w-full lg:w-2/3 shadow-2xl bg-orange-50" onSubmit={handleSubmit(onSubmit)}>
               <div className="card-body">
                  <div className="lg:flex gap-4 w-full">
                     <div className="form-control lg:w-1/2">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input
                           type="text"
                           placeholder="Your Name"
                           className="input input-bordered"
                           {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-red-500">Name is required.</span>}
                     </div>
                     <div className="form-control lg:w-1/2">
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
                  </div>
                  <div className="lg:flex gap-4 w-full">
                     <div className="form-control lg:w-1/2">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="password"
                           placeholder="Password"
                           className="input input-bordered"
                           {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500">Password is required.</span>}
                     </div>
                     <div className="form-control lg:w-1/2">
                        <label className="label">
                           <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                           type="password"
                           placeholder="Confirm Password"
                           className="input input-bordered"
                           {...register("confirm_password", { required: true })}
                        />
                        {errors.confirm_password && (
                           <span className="text-red-500">Confirm Password is required.</span>
                        )}
                     </div>
                  </div>

                  <div className="form-control w-full">
                     <label className="label">
                        <span className="label-text">Photo URL</span>
                     </label>
                     <input
                        type="text"
                        placeholder="Your Photo Url"
                        className="input input-bordered"
                        {...register("photo_url")}
                     />
                  </div>

                  <div className="form-control mt-6">
                     <ButtonOutline>Register</ButtonOutline>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default page;
