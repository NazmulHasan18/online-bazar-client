import React from "react";

const SectionTitle = ({ title, subtitle }) => {
   return (
      <div className="w-fit text-center p-5 mx-auto mb-8">
         <h2 className="pb-3 border-b-4 border-orange-600 text-4xl font-bold">{title}</h2>
         <p className="text-xl mt-3 font-semibold text-gray-500 italic">{subtitle}</p>
      </div>
   );
};

export default SectionTitle;
