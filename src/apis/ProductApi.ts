import { axiosClient } from "./axios";
import { Products, Params, Product } from "../types";

export const productApi = {
  getAll(url: string, params?: Params): Promise<Products> {
    return axiosClient.get(url, { params });
  },

  getProducts() {
    const url = "/products/productList";
    return axiosClient.get(url);
  },

  getProductById(id: number | string): Promise<{ data: Product }> {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  getProductByProductType(params: {
    q: string | undefined;
  }): Promise<{ data: Product[] }> {
    const url = "/products/search";
    return axiosClient.get(url, { params });
  },
};
