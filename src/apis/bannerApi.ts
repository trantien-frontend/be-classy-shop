import { Banners } from "../types";
import { axiosClient } from "./axios";

export const bannerApi = {
  getAll(): Promise<Banners> {
    const url = "banners";
    return axiosClient.get(url);
  },
};
