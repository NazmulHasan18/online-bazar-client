import React, { useContext } from "react";
import { AuthContext } from "../_Provider/AuthProvider/AuthProvider";

const useAuth = () => {
   const auth = useContext(AuthContext);
   return auth;
};

export default useAuth;
