import "../styles/Event.css";
import nophoto from "../../../assets/images/icons/noimage.png";
import { ButtonNav } from "../../../ui/buttonNav/organoids/ButtonNav";
import { useEffect, useState } from "react";
import { InEvent } from "../logics/InEvent";
import { CreateIdea } from "../../CreateIdea/organoids/CreateIdea";
import { IdeasList } from "../molecules/IdeasList";
import { InIdeasList } from "../logics/InIdeasList";
import {EventDelete, IEventDelete} from "../logics/EventDelete"
import { useNavigate } from "react-router-dom";

export const Event = () => {
  const [listIdeas, setListIdeas] = useState<any | null>(null);
  const [createIdea, setCreateIdea] = useState<boolean>(false);
  const navigate = useNavigate();
  const [id, setId] = useState<any>();
  const [value, setValue] = useState<any>();
  const requestInEvent = async (id: string) => {
    try {
      setValue(await InEvent({ id: id }));
    } catch (error) {
      console.log("requestInEvent error", error);
    }
  };
  useEffect(() => {
    if (id) {
      requestInEvent(id);
      requestInListEvent();
    }
  }, [id]);

  useEffect(() => {
    setId(window.location.pathname.split("/event/:")[1]);
  }, []);

  const requestInListEvent = async () => {
    console.log("id", id);
    try {
      setListIdeas(await InIdeasList({ eventId: id }));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteClick = async (params: IEventDelete) => {
    try {
      const result = await EventDelete({eventid: params.eventid});
      if(result){
        navigate("/profile")
      }
    } 
    catch (error) {
      console.log(error);
    }
  };

  return (
    value && (
      <div className="Event">
        <div className="Event__Content">
          <img
            className="Event__Image"
            src={nophoto}
            alt="фото"
            width="600px"
          />
          <div className="Event__Block">
            <div className="Event__Block__Title">{value.title}</div>
            <div className="Event__Block__Description"><div className="Event__Block__Description__Title">Описание:</div> {value.description}</div>
            <div className="Event__Block__Adress"><div className="Event__Block__Address__Title">Адрес:</div> {value.address}</div>
            <div className="Event__Block__Date">
            <div className="Event__Block__Date__Title">Дата:</div> {new Date(value.deadline).toLocaleDateString("ru-RU")}
            </div>
            <div className="Event__Content__Buttons">
            <div onClick={()=>{navigate(`/editevent/:${id}`)}} className="Event__Content__Buttons__Edit">
              Изменить
            </div>
            <div onClick={()=>{deleteClick({eventid: id})}} className="Event__Content__Buttons__Delete">
              Удалить
            </div>
          </div>
          </div>
          
        </div>
        <div className="Event__Ideas__Create">
          <div className="Event__Line"></div>
          <div
            onClick={() => {
              setCreateIdea(!createIdea);
            }}
            className="Create__Idea__Button"
          >
            Создать сбор
          </div>
          {createIdea && (
            <div>
              <CreateIdea
                requestInListEvent={requestInListEvent}
                eventID={id}
              />
            </div>
          )}
        </div>
        <div className="Event__Ideas__List">
          <IdeasList listIdeas={listIdeas} setListIdeas={setListIdeas} />
        </div>
      </div>
    )
  );
};
