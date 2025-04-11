// utils/axiosInstance.ts
import axios from "axios";

// Create axios instance with base URL
const instance = axios.create({
  baseURL: "http://localhost:3001",  // Backend API URL
});

// Add a request interceptor to include JWT token in headers if available
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from localStorage

    if (token) {
      // Add Authorization header if token exists
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config; // Return modified config
  },
  (error) => {
    return Promise.reject(error); // Return the error if occurs
  }
);

// Add a response interceptor to handle errors globally
instance.interceptors.response.use(
  (response) => {
    return response; // If the request was successful, just return the response
  },
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized errors (for example, if token is invalid or expired)
      localStorage.removeItem("token"); // Clear invalid token
    }
    return Promise.reject(error); // Reject the error for further handling
  }
);

export default instance;