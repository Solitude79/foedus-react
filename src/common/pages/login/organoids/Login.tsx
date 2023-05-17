import pic from "../../../assets/images/auth-pic.png";
import "../styles/Login.css";
import { Input } from "../../../ui/imputLog/organoids/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IInLogin, InLogin } from "../logics/InLogin";

export const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<IInLogin>({
    email: "",
    password: "",
  });

  const handleClick = async () => {
    try {
      await InLogin(value);
      navigate("/profile")
    } catch (error) {
      console.log("Такой аккаунт уже существует", error);
    }
  };

  return (
    <div className="login">
      <div className="left-side">
        <img className="pic" src={pic} alt="картинка" />
      </div>
      <form
        className="Login__Form"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="Login__Input__Container">
          <input
            minLength={1}
            required
            type="email"
            placeholder={"Email"}
            className="Login_Email"
            value={value.email}
            onChange={(event: any) => {
              setValue({ ...value, email: event.target.value });
            }}
          />
          <input
            minLength={1}
            required
            maxLength={20}
            type="password"
            placeholder={"Пароль"}
            value={value.password}
            onChange={(event: any) => {
              setValue({ ...value, password: event.target.value });
            }}
          />
          <input type="submit" className="login-button" value={"Войти"} />
          <NavLink to={"/reg"} className="Dont-have-account">
            Нет учетной записи? Зарегистрируйтесь!
          </NavLink>
        </div>
      </form>
    </div>
  );
};
