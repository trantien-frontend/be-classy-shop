import { axiosClient } from "./axios";
import { Products, Params, Product } from "../types";

export const productApi = {
  getAll(params?: Params): Promise<Products> {
    const url = "products";
    return axiosClient.get(url, { params });
  },

  getProductById(id: number | string): Promise<Product> {
    const url = `products/${id}`;
    return axiosClient.get(url);
  },
};
