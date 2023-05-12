import pic from "../../../assets/images/auth-pic.png";
import "../styles/SignUp.css";
import { Input } from "../../../ui/imputLog/organoids/Input";
import { NavLink } from "react-router-dom";
import { InSignUp, IInSignUp } from "../logics/InSignUp";
import { useEffect, useState } from "react";

export const SignUp = () => {
  const [value, setValue] = useState<IInSignUp>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [password, setPassword] = useState<any>({
    password: "",
  });
  const handleClick = async () => {
    if (password.password === value.password) {
      try {
        await InSignUp(value);
      } catch (error) {
        console.log("Такой аккаунт уже существует", error);
      }
    } else {
      console.log("Пароли не совпадает");
    }
  };
  useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <div className="signup">
      <div className="left-side">
        <img className="pic" src={pic} alt="картинка" />
      </div>
      <div className="'right-side">
        <form
          className="input-form-reg"
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <div className="Name">
            <input
              minLength={1}
              required
              maxLength={20}
              type="text"
              placeholder={"Имя"}
              value={value.firstName}
              onChange={(event: any) => {
                setValue({ ...value, firstName: event.target.value });
              }}
            />
          </div>
          <div className="LastName">
            <input
              minLength={1}
              required
              maxLength={20}
              type="text"
              placeholder={"Фамилия"}
              value={value.lastName}
              onChange={(event: any) => {
                setValue({ ...value, lastName: event.target.value });
              }}
            />
          </div>
          <div className="Email">
            <input
              minLength={1}
              required
              type="email"
              placeholder={"Email"}
              value={value.email}
              onChange={(event: any) => {
                setValue({ ...value, email: event.target.value });
              }}
            />
          </div>
          <div className="password">
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
          </div>
          <div className="password">
            <input
              minLength={1}
              required
              maxLength={20}
              type="password"
              placeholder={"Пароль"}
              value={password.password}
              onChange={(event: any) => {
                setPassword({ ...password, password: event.target.value });
              }}
            />
          </div>
          <div className="sign-button-class">
            <input type="submit" className="login-button" value={"Войти"} />
          </div>
          <div>
            <NavLink to={"/login"} className="Do-have-account">
              У вас уже есть учетная запись?
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
