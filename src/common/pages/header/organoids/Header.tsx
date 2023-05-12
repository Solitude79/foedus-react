import logo from "../../../assets/images/logo.png";
import profile_icon from "../../../assets/images/profile-icon.svg";
import { ButtonNav } from "../../../ui/buttonNav/organoids/ButtonNav";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import { $accessToken } from "../../../config/accessToken";
import { useStore } from "effector-react";
import { $userValue } from "../../../config/UserHooks";
import { useEffect } from "react";

interface IHeader {}
export const Header = (params: IHeader) => {
  const accessToken = useStore($accessToken);
  const userValue = useStore($userValue);
  return (
    <div className="Header__General">
      <div className="Header">
        <div className="Header__Content">
          <NavLink to={"/"}>
            <img className="Header__Content__Logo" src={logo} alt="логотип" />
          </NavLink>
          {accessToken ? (
            <div className="Header__Content__Right">
              <ButtonNav
                link={"/makeevent"}
                className={"Header__Content__Right__Button"}
                text={"Создать проект"}
              />
              <NavLink
                className="Header__Content__Right__Profile"
                to={"/profile"}
              >
                <div className="Header__Content__Right__Profile__Name">
                  {userValue.firstName}
                </div>
                <img
                  className="Header__Content__Right__Profile__Icon"
                  src={profile_icon}
                  alt="иконка"
                />
              </NavLink>
            </div>
          ) : (
            <div className="Header__Content__Right">
              <ButtonNav
                link={"/makeevent"}
                className={"Header__Content__Right__Button"}
                text={"Создать проект"}
              />
              <ButtonNav
                link={"/login"}
                className={"Header__Content__Right__Button"}
                text={"Авторизоваться"}
              />
            </div>
          )}
        </div>
        <div className="Header_Line"></div>
      </div>
    </div>
  );
};
