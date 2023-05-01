import pic from "../../../assets/images/auth-pic.png"
import "../styles/SignUp.css"
import { Input } from "../../../ui/imputLog/organoids/Input";
import { NavLink } from "react-router-dom";

interface ISignUp {
  id: number;
}
export const SignUp = (params: ISignUp) => {
  return (
    <div className="signup">
      <div className="left-side">
        <img className="pic" src={pic} alt="картинка" />
      </div>
      <div className="'right-side">
        <div className="input-form-reg">
          <div className="Name">
            <Input className={"inp"} placeholder={"Имя"}/>
          </div>
          <div className="LastName">
          <Input className={"inp"} placeholder={"Фамилия"}/>
          </div>
          <div className="Email">
          <Input className={"inp"} placeholder={"Email"}/>
          </div> 
          <div className="password">
          <Input className={"inp"} placeholder={"Пароль"}/>
          </div> 
          <div className="password">
          <Input className={"inp"} placeholder={"Повторите пароль"}/>
          </div> 
          <div className="sign-button-class">
            <button className="signup-button">Зарегистрироваться</button>
          </div>
          <div>
            <NavLink to={"/login"} className="Do-have-account">
              У вас уже есть учетная запись?
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}