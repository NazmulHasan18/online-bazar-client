import React from "react";

const page = ({ params }) => {
   return (
      <div>
         <h2>{params.id}</h2>
      </div>
   );
};

export default page;
