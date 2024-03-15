import { axiosClient } from "./axios";
import { Products, Params, Product } from "../types";

export const productApi = {
  getAll(url: string, params?: Params): Promise<Products> {
    return axiosClient.get(url, { params });
  },

  getProducts() {
    const url = "/products/listProduct";
    return axiosClient.get(url);
  },

  getProductById(id: number | string): Promise<Product> {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};
