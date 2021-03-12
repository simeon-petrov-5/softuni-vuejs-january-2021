import axios from "axios";

export function setupAxios() {
  const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  axiosInstance.interceptors.request.use(
    function(config) {
      config.headers = { ...config.headers, Authorization: `Bearer mytoken` };
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
