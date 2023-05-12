import { createEvent, createStore } from "effector";
import { accessTokenName, axiosInstance } from "./axiosInstance";
import { AxiosError } from "axios";
import { requestUser } from "../../App";

export const $accessToken = createStore<string>("");
export const setAccessToken = createEvent<string>();
$accessToken.on(setAccessToken, (_, val) => val);

$accessToken.updates.watch((token) => {
  localStorage.setItem(accessTokenName, (token));
  if(token){
      requestUser()
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error?.response?.status === 401) {
      setAccessToken("");
    }
  }
);
export const UserLogout = () => {
  setAccessToken("");
};
