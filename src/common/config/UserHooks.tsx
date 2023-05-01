import { createEvent, createStore } from "effector";
import { $accessToken } from "./accessToken";
import { accessTokenName } from "./axiosInstance";
import Ava from "./assets/profile/Ava.png";

export const $userAuthorization = createStore<boolean>(false);
export const setUserAuthorization = createEvent<boolean>();
$userAuthorization.on(setUserAuthorization, (_, val) => val);

export const $userName = createStore<string>("Даня Булгаков");
export const setUserName = createEvent<string>();
$userName.on(setUserName, (_, val) => val);

$accessToken.updates.watch((token) => {
  if (!localStorage.getItem(accessTokenName)?.length) {
    setUserAuthorization(false);
  } else {
    setUserAuthorization(true);
  }
});
export interface IUserValue {
  generalInfo: {
    image: string;
    login: string;
    name: string;
    dateOfRegistration: string;
    about: string;
    id: number;
  };
  statistics: {
    shockMode: string;
    totalPoints: string;
  };
  achievements: {};
  articleListId: number[];
}
export const $userValue = createStore<IUserValue>({
  generalInfo: {
    image: Ava,
    login: "monica",
    name: "Моника Беллуччи",
    dateOfRegistration: "03.04.2023",
    about: "Итальянская актриса и модель.",
    id: 0,
  },
  statistics: { shockMode: "43", totalPoints: "99" },
  achievements: {},
  articleListId: [1, 2],
});
export const setUserValue = createEvent<any>();
$userValue.on(setUserValue, (_, val) => val);
