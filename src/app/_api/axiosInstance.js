import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "http://localhost:5000",
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
