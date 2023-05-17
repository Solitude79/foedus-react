import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import nophoto from "../../../assets/images/icons/noimage.png";
import { InEditEvent, IInEditEvent } from "../logics/InEditEvent";
import "../styles/EditEvent.css"

export const EditEvent = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<any>();
  useEffect(() => {
    if (id) {
      setValue({...value, eventId: id})
    }
  }, [id]);
  useEffect(() => {
    setId(window.location.pathname.split("/editevent/:")[1]);
  }, []);
  const [value, setValue] = useState<IInEditEvent>({
    eventId: id,
    title: "",
    deadline: "",
    address: "",
    description: ""
  });
  
  const handleClick = async () => {
    try {
      const result = await InEditEvent(value);
      if(result){
        navigate(`/profile`)
      }
    } 
    catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("value", value);
  }, [value]);
  return (
    <div className="EditEvent">
      <div className="EditEvent__Image">
        <img src={nophoto} alt="нет картинки" className="nophoto"  width="600px"/>
        <button className="EditEvent__AddPic__Button">Добавить фото</button>
      </div>
      <form className="EditEvent__Form" 
          onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="EditEvent__Input__Contaiter">
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
          <input type="submit" className="EditEvent__CreateEvent__Button" value={"Сохранить"} />
        </div>
      </form>
    </div>
  );
};
