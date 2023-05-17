import { useEffect, useState } from "react";
import { InIdeasList, IInIdeaList } from "../logics/InIdeasList";
import "../styles/IdeasList.css";

interface IIdeasList {
  listIdeas: any;
  setListIdeas: React.Dispatch<any>;
}
export const IdeasList = (params: IIdeasList) => {
  return (
    <div className="Ideas__Card">
      {params.listIdeas &&
        params.listIdeas.map((element: any, index: any) => (
          <div key={index} className="Idea__Card">
            <div className="Idea__Card__Info">
              <div className="Idea__Card__Info__Title">{element.title}</div>
              <div className="Idea__Card__Info__Description"><div className="Idea__Card__Info__Description__Title">Описание: </div>{element.description}</div>              
              <div className="Idea__Card__Info__Deadline"><div className="Idea__Card__Info__Deadline__Title">До: </div>{element.deadline &&
                new Date(element.deadline).toLocaleDateString("ru-RU")}</div>
              <div className="Idea__Card__Info__Money"><div className="Idea__Card__Info__Money__Title">Сбор: </div>{element.moneyRequired}р</div>
            </div>
            
            <div className="Idea__Card__ChatButton">Чат</div>
          </div>
        ))}
    </div>
  );
};
