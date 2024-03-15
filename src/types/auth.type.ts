export interface RegisterResponse {
  statusCode: number;
  body?: {
    code: number;
    message: string;
  };
}
