import axios from "axios";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: `http://localhost:5000`,
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  axiosSecure.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
      return config; // ✅ this was missing!
    },
    function (error) {
      return Promise.reject(error); // ✅ best practice to handle errors
    },
  );

  return axiosSecure;
};

export default useAxiosSecure;
