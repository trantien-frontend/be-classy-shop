import { Categories } from "../types/index";
import { axiosClient } from "./axios";

export const category = {
  getAll(): Promise<Categories> {
    const url = "/categories";
    return axiosClient.get(url);
  },
};
