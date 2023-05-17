import { setAccessToken } from "../../../config/accessToken";
import { axiosInstance } from "../../../config/axiosInstance";

export interface IInMakeEvent {
  title: string;
  deadline: string;
  address: string;
  description: string;
}

export const InMakeEvent = async (params: IInMakeEvent) => {
  return axiosInstance
    .post("/events", {
      "title": params.title,
      "deadline": params.deadline,
      "address": params.address,
      "description": params.description,
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};
