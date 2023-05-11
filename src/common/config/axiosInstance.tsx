import axios from "axios";
import { setAccessToken } from "./accessToken";

export const accessTokenName = "FoedusToken";

export const axiosInstance = axios.create({
  baseURL: "http://26.74.162.51:3000/",
  headers: {
    authorization: `Bearer ${localStorage.getItem(accessTokenName)}`,
  },
});

export const UserLogout = () => {
  setAccessToken("");
};
