import logo from "../../../assets/images/logo.png";
import profile_icon from "../../../assets/images/profile-icon.png"
import { ButtonNav } from "../../../ui/buttonNav/organoids/ButtonNav";
import { NavLink } from "react-router-dom";
import "../styles/Header.css"
interface IHeader{
  
}
export const Header = (params: IHeader) => {
  return (
    <div className="Header">
      <div className="content">
        <div className="brand">
          <NavLink to={"/"}>
            <img className="logo" src={logo} alt="логотип" />
          </NavLink>
          
        </div>
        <div className="right-side">
          <div className="button">
            <ButtonNav link={"/event"} className={"makeevent"} text={"Создать проект"} />
          </div>
          <div className="button">
            <ButtonNav link={"/login"} className={"makeevent"} text={"Авторизоваться"} />
          </div>
          <div className="profile-icon">
            <img className="icon" src={profile_icon} alt="иконка" />
          </div>
        </div>
      </div>
    </div>
  )
}