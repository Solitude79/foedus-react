import "../styles/Home.css";
import Home__Image from "../../../assets/images/Home__Image.png";
import { ButtonNav } from "../../../ui/buttonNav/organoids/ButtonNav";

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__Block">
        <div className="Home__Block__Title">
          Собирать деньги на праздник стало легче
        </div>
        <div className="Home__Block__Description">
          Создавай свое мероприятие, зови друзей и открывай общий сбор средств.
          Теперь не нужно миллионов чатов в социальных сетях, а все благодаря
          Foedus
        </div>
        <ButtonNav
          link={"/makeevent"}
          className={"Home__Block__Button"}
          text={"Попробовать"}
        />
      </div>
      <img className="Home__Image" src={Home__Image} alt="круги" />
    </div>
  );
};
