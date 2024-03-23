import axios, { AxiosError } from "axios";

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

export function isAxiosUnprocessableEntityError<FormError>(
  error: unknown,
): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === 422;
}

export function isAxiosNotFound<FormError>(
  error: unknown,
): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === 404;
}

export function isAxiosBadRequest<FormError>(
  error: unknown,
): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === 400;
}
