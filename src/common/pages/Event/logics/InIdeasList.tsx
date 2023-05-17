import { axiosInstance } from "../../../config/axiosInstance";
export interface IInIdeaList {
  eventId: string;
}
export const InIdeasList = async (params: IInIdeaList) => {
  return axiosInstance
    .get(`ideas/onEvent/${params.eventId}`)
    .then((res: any) => {
      return(res.data)
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};