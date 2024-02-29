import { axiosClient } from "./axios";
import { Products, Params, Product } from "../types";

export const productApi = {
  getAll(url: string, params?: Params) {
    return axiosClient.get(url, { params });
  },

  getProductsByProductType() {},

  getProductById(id: number | string): Promise<Product> {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
};
