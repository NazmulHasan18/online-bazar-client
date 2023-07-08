"use client";
import React, { createContext, useEffect, useState } from "react";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
   onAuthStateChanged,
} from "firebase/auth";
import { app } from "../../../../firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   const signUpWithEmailPass = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const signInWithEmailPass = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };
   const updateUser = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
      });
   };

   //    !sign out
   const logOut = () => {
      return signOut(auth);
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         setUser(user);
      });
      if (user) {
         axios.post("http://localhost:5000/jwt", { email: user.email }).then((res) => {
            console.log(res.data.token);
            localStorage.setItem("jwt-token", JSON.stringify(res.data.token));
         });
      } else {
         localStorage.removeItem("jwt-token");
         console.log("no user");
      }

      return unsubscribe;
   }, [user]);

   const authContext = {
      user,
      signUpWithEmailPass,
      signInWithEmailPass,
      updateUser,
      logOut,
   };

   return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
