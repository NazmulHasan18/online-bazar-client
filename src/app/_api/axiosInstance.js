import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "https://online-bazar-server-nazmulhasan18.vercel.app",
   headers: {
      "Content-Type": "application/json",
   },
});

// Set Authorization header using the token from local storage
if (typeof window !== "undefined") {
   const token = localStorage.getItem("jwt-token");
   if (token) {
      axiosInstance.defaults.headers.common["authorization"] = `Bearer ${token}`;
   }
}

export default axiosInstance;
