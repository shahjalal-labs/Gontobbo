import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        if (user) {
          const token = await user.getIdToken(); // ✅ this is the correct ID token
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    return () => {
      axiosInstance.interceptors.request.eject(interceptor); // Cleanup
    };
  }, [user]);

  return axiosInstance;
};

export default useAxiosSecure;

/* import axios from "axios";
import useAuth from "./useAuth";

export const axiosInstance = axios.create({
  baseURL: `http://localhost:8000`,
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  axiosInstance.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export default useAxiosSecure; */
