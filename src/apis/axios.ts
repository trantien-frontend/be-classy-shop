import axios from "axios";
import {
  getAccessTokenFromLS,
  saveAccessTokenToLs,
  saveUserToLS,
} from "../utils/auth";
import { ApiResponse, LoginReponse } from "../types";
import { User } from "../types/user.type";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8081/api/v1",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

axiosClient.interceptors.request.use(
  function (config) {
    let token: string | null = getAccessTokenFromLS() || null;
    if (token && config.headers) {
      token = `Bearer ${token}`;
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    const { config, status } = response;
    if (config.url === "/auth/signin" && status === 200) {
      const token: string =
        (response.data as ApiResponse<LoginReponse>).body?.token || "";
      saveAccessTokenToLs(token);

      const user: User | string =
        (response.data as ApiResponse<LoginReponse>).body?.user || "";

      saveUserToLS(user);
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
