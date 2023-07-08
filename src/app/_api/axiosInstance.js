import axios from "axios";

const axiosInstance = axios.create({
   baseURL: "http://localhost:5000/",
});

// Set Authorization header using the token from local storage
const token = localStorage.getItem("jwt-token");
if (token) {
   axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axiosInstance;
