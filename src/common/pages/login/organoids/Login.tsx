import pic from "../../../assets/images/auth-pic.png"
import "../styles/Login.css"
import { Input } from "../../../ui/imputLog/organoids/Input";
import { NavLink } from "react-router-dom";

interface ILogin {
  id: number;
}
export const Login = (params: ILogin) => {
  return (
    <div className="login">
      <div className="left-side">
        <img className="pic" src={pic} alt="картинка" />
      </div>
      <div className="'right-side">
        <div className="imput-form">
          <div className="email">
            <Input className={"inp"} placeholder={"Email"}/>
          </div>
          <div className="password">
          <Input className={"inp"} placeholder={"Пароль"}/>
          </div> 
          <div className="log-button-class">
            <button className="login-button">Войти</button>
          </div>
          <div>
            <NavLink to={"/reg"} className="Dont-have-account">
              Нет учетной записи? Зарегистрируйтесь!
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}