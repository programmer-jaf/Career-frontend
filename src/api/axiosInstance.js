import axios from "axios";

// ✅ Correct way to assign the value
const backendURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
