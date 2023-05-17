import { setAccessToken } from "../../../config/accessToken";
import { axiosInstance } from "../../../config/axiosInstance";

export interface IInEvent {
  id: string;
}

export const InEvent = async (params: IInEvent) => {
  return axiosInstance
    .get(`/events/${params.id}`)
    .then((res) => {
      if (res.data) {
        return res.data;
      }
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};
