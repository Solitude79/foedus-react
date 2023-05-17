import { useEffect, useState } from "react";
import { InMyEvents } from "../logics/InMyEvents";
import "../styles/MyEvents.css";
import { useNavigate } from "react-router-dom";

interface IMyEvents {}
export const MyEvents = (params: IMyEvents) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<any | null>(null);
  const handleClick = async () => {
    try {
      setEvents(await InMyEvents());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleClick();
  }, []);
  useEffect(() => {
    console.log(events);
  }, [events]);
  return (
    <div className="Event__Cards">
      {events &&
        events.map((element: any, index: any) => (
          <div
            key={index}
            className="Event__Card"
            onClick={() => {
              navigate(`/event/:${element.id}`);
            }}
          >
            <div className="Event__Title">{element.title}</div>
            {element.deadline &&
              new Date(element.deadline).toLocaleDateString('ru-RU')}
            <div>{element.address}</div>
          </div>
        ))}
    </div>
  );
};
