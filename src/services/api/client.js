import axios from "axios";
import Cookies from "js-cookie";
import { REST_API_URL } from "../../constants/environment";

const axiosInstance = axios.create({
  baseURL: REST_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      config.headers ??= {};
      config.headers.authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
