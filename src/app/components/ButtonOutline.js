import React from "react";

const ButtonOutline = ({ children }) => {
   return (
      <button className="btn btn-outline border-orange-600 text-orange-600 hover:border-orange-600 hover:bg-orange-600 btn-sm md:btn-md">
         {children}
      </button>
   );
};

export default ButtonOutline;
