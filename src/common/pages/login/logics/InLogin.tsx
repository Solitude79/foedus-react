import { setAccessToken } from "../../../config/accessToken";
import { axiosInstance } from "../../../config/axiosInstance";

export interface IInLogin {
  email: string;
  password: string;
}
export const InLogin = async (params: IInLogin) => {
  return axiosInstance
    .post("/auth/login", {
      email: params.email,
      password: params.password,
    })
    .then(() => {
      setAccessToken("true");
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};
