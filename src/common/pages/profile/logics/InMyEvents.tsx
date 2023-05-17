import { setAccessToken } from "../../../config/accessToken";
import { axiosInstance } from "../../../config/axiosInstance";

export const InMyEvents = async () => {
  return axiosInstance
    .get("/events/my")
    .then((res: any) => {
      return(res.data)
    })
    .catch((error: any) => {
      throw new Error(error.response.data.message);
    });
};