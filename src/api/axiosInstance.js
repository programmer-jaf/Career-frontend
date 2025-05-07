import axios from "axios";
baseURL: import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL, // ✅ Change if your backend base URL differs
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
