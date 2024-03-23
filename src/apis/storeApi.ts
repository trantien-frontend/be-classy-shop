import { axiosClient } from "./axios";
import { Stores } from "../types";

export const storeApi = {
  getStoreHasProduct(params: any): Promise<Stores> {
    const url = "/stores";
    return axiosClient.get(url, { params });
  },
};
