import { User } from "./user.type";
export interface ApiResponse<T> {
  statusCode: number;
  body?: T;
}

export interface ErrorResponse {
  code: number;
  message: string;
}

export interface LoginReponse {
  token: string;
  user: User;
}
