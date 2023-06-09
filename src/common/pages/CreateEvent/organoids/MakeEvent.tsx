import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import nophoto from "../../../assets/images/icons/noimage.png";
import "../styles/MakeEvent.css";
import { InMakeEvent, IInMakeEvent } from "../logics/InMakeEvent";

export const MakeEvent = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<IInMakeEvent>({
    title: "",
    deadline: "",
    address: "",
    description: ""
  });
  const handleClick = async () => {
    try {
      await InMakeEvent(value);
      navigate("/profile");
    } catch (error) {
    }
  };
  useEffect(() => {
    console.log("value", value);
  }, [value]);
  return (
    <div className="MakeEvent">
      <div className="MakeEvent__Image">
        <img src={nophoto} alt="нет картинки" className="nophoto"  width="600px"/>
        <button className="MakeEvent__AddPic__Button">Добавить фото</button>
      </div>
      <form className="MakeEvent__Form" 
          onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="MakeEvent__Input__Contaiter">
          <input
            required
            className="name-input"
            type="text"
            placeholder="Название"
            value={value.title}
            onChange={(event: any) => {
              setValue({ ...value, title: event.target.value });
            }}
          />      
          <input
            required
            type="datetime-local"
            placeholder="Дата"
            className="deadline-input"
            value={value.deadline}
            onChange={(event: any) => {
              setValue({ ...value, deadline: event.target.value });
            }}
          />       
          <input
            required
            className="description-input"
            type="text"
            placeholder="Описание"
            value={value.description}
            onChange={(event: any) => {
              setValue({ ...value, description: event.target.value });
            }}
          />   
          <input
            required
            className="adress-input"
            type="text"
            placeholder="Адрес"
            value={value.address}
            onChange={(event: any) => {
              setValue({ ...value, address: event.target.value });
            }}
          />
          <input type="submit" className="MakeEvent__CreateEvent__Button" value={"Создать"} />
        </div>
      </form>
    </div>
  );
};
