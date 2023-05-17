import { axiosInstance } from "../../../config/axiosInstance";

export interface IInCreateIdea {
  eventId: string;
  title: string;
  description: string;
  moneyRequired: number;
  deadline: string;
}
export const InCreateIdea = async (params: IInCreateIdea) => {
  return axiosInstance
    .post(`/ideas/${params.eventId}`, {
      title: params.title,
      deadline: params.deadline,
      moneyRequired: params.moneyRequired,
      description: params.description,
    })
    .then((res) => {
      return res.data;
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};
