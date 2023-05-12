import axios from "axios";
import { setAccessToken } from "./accessToken";

export const accessTokenName = "FoedusToken";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  withCredentials: true,
  // headers: {
  //   authorization: `Bearer ${localStorage.getItem(accessTokenName)}`,
  // },
});
