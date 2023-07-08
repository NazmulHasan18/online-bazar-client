import React from "react";

const Button = ({ children, onClickFunction }) => {
   return (
      <button
         className="btn w-fit btn-sm md:btn-md bg-orange-600 text-white hover:bg-orange-700"
         onClick={onClickFunction}
      >
         {children}
      </button>
   );
};

export default Button;
