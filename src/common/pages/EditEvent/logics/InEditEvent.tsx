import { setAccessToken } from "../../../config/accessToken";
import { axiosInstance } from "../../../config/axiosInstance";

export interface IInEditEvent {
  eventId: string;
  title: string;
  deadline: string;
  address: string;
  description: string;
}

export const InEditEvent = async (params: IInEditEvent) => {
  return axiosInstance
    .put(`/events/${params.eventId}`, {
      "title": params.title,
      "deadline": params.deadline,
      "address": params.address,
      "description": params.description,
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};
