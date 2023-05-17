import { NavLink } from "react-router-dom";
import avatar from "../../../assets/images/avatar.png";
import { useStore } from "effector-react";
import { $userValue } from "../../../config/UserHooks";
import { useState } from "react";
import { MyEvents } from "../molecules/MyEvents";
import { InvitedInEvents } from "../molecules/InvitedInEvents";
import "../styles/Profile.css";
import { UserLogout } from "../../../config/accessToken";

interface IProfile {}
export const Profile = (params: IProfile) => {
  const userValue = useStore($userValue);
  const [selectedComponent, setSelectedComponent] =
    useState<string>("MyEvents");

  return (
    <div className="Profile">
      <div className="Profile__UserInfo">
        <img
          className="Profile__UserInfo__Avatar"
          src={avatar}
          alt="аватар"
          width="250px"
          
        />
        <div className="Profile__UserInfo__Name">
          {userValue.firstName} {userValue.lastName}
        </div>
        <div className="Profile__UserInfo__Email">{userValue.email}</div>
        <div onClick={UserLogout} className="Profile_Logout">
          Выйти
        </div>
      </div>
      <hr className="Profile__Border" />
      <div className="Profile_Events">
        <div>
          {/* <label htmlFor="component-select">Select a component:</label>
          <select id="component-select" value={selectedComponent} onChange={handleComponentChange}>
            <option value="MyEvents">Мои мероприятия</option>
            <option value="InvitedInEvents">Подписки</option>
          </select> */}
          <div className="Profile__Events__Choice">
            <div
              className={`${
                selectedComponent === "MyEvents"
                  ? "Profile__Events__Choice__Item__Choices"
                  : ""
              } Profile__Events__Choice__Item`}
              onClick={() => setSelectedComponent("MyEvents")}
            >
              Мои мероприятия
            </div>
            <div
              className={`${
                selectedComponent === "InvitedInEvents"
                  ? "Profile__Events__Choice__Item__Choices"
                  : ""
              } Profile__Events__Choice__Item`}
              onClick={() => setSelectedComponent("InvitedInEvents")}
            >
              Подписки
            </div>
          </div>
          {selectedComponent === "MyEvents" ? (
            <MyEvents />
          ) : (
            <InvitedInEvents />
          )}
        </div>
      </div>
    </div>
  );
};
