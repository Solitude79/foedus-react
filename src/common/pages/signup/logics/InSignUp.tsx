import { setAccessToken } from "../../../config/accessToken";
import { axiosInstance } from "../../../config/axiosInstance";

export interface IInSignUp {
  email: string;
  password: string;
  name: string;
  lastname: string;
}
export const InSignUp = async (params: IInSignUp) => {
  return axiosInstance
    .post("/auth/reg", {
      email: params.email,
      password: params.password,
      name: params.name,
      lastname: params.lastname
    })
    .then((res: any) => {
      if (res.data.token) {
        setAccessToken(res.data.token);
      }
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};
