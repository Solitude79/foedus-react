import { setAccessToken } from "../../../config/accessToken";
import { axiosInstance } from "../../../config/axiosInstance";

export interface IInSignUp {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export const InSignUp = async (params: IInSignUp) => {
  return axiosInstance
    .post("/auth/reg", {
      email: params.email,
      password: params.password,
      firstName: params.firstName,
      lastName: params.lastName,
    })
    .then((res: any) => {
      setAccessToken("true");
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};
