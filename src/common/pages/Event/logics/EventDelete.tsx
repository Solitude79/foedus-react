import { axiosInstance } from "../../../config/axiosInstance";

export interface IEventDelete{
  eventid: string
}

export const EventDelete = async (params: IEventDelete) => {
  return axiosInstance
    .delete(`/events/${params.eventid}`, {
    })
    .then((res: any)=>{
      if(res.data){
        return(res.data)
      }
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};
