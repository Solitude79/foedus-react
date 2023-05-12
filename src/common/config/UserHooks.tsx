import { createEvent, createStore } from "effector";
import { axiosInstance } from "./axiosInstance";

export interface IuserValue {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  roleId: number;
}
export const $userValue = createStore<IuserValue>({
  email: "email",
  firstName: "firstName",
  id: 0,
  lastName: "lastName",
  roleId: 6,
});
export const setUserValue = createEvent<IuserValue>();
$userValue.on(setUserValue, (_, val) => val);

export const InUser = async () => {
  return axiosInstance
    .get("/auth/profile")
    .then((res: any) => {
      return res.data;
    })
    .catch((error) => {
      throw new Error(error.response.data.message);
    });
};
