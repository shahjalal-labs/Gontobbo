import axios from "axios";
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

export default useAxiosSecure;
