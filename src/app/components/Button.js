import React from "react";

const Button = ({ children }) => {
   return (
      <button className="btn w-fit btn-sm md:btn-md bg-orange-600 text-white hover:bg-orange-700">
         {children}
      </button>
   );
};

export default Button;
