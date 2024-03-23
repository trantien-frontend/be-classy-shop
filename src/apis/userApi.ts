import { ApiResponse, ErrorResponse, LoginReponse } from "../types/index";
import { axiosClient } from "./axios";
import { RegisterFormData } from "../utils/rules";
import { LoginFormData } from "../utils/rules";

export const userApi = {
  register(
    data: Omit<RegisterFormData, "confirm_password">,
  ): Promise<ApiResponse<ErrorResponse>> {
    const url = "/auth/signup";
    return axiosClient.post(url, data);
  },
  login(data: LoginFormData): Promise<ApiResponse<LoginReponse>> {
    const url = "/auth/signin";
    return axiosClient.post(url, data);
  },
};
