import { NavLink } from "react-router-dom";
import { useState } from "react";
import nophoto from "../../../assets/images/icons/noimage.png"
import "../styles/MakeEvent.css"

interface IMakeEvent {
}
export const MakeEvent = (params: IMakeEvent) => {
  return (
    <div className="makeevent">
      <div className="leftside">
        <img src={nophoto} alt="нет картинки" className="nophoto"/>
        <button className="addpic">Добавить фото</button>
      </div>
      <div className="rightside">
        <form className="form-makeevent">
          <div className="name">
            <input type="text" placeholder="Название" />          
          </div>
          <div className="date">
            <input type="date" placeholder="Дата"/>
          </div>
          <div className="description">
            <input type="text" placeholder="Описание"/>
          </div>
          <div className="adress">
            <input type="text" placeholder="Адрес"/>
          </div>
          <input type="submit" className="createbutton" value={"Создать"}/>
        </form>
      </div>
    </div>
  );
};
