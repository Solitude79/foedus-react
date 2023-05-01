import "../styles/Home.css";
import man from "../../../assets/images/man.png";
import circles from "../../../assets/images/mainpagecircles.png";
import dog from "../../../assets/images/dog.png";
import { ButtonNav } from "../../../ui/buttonNav/organoids/ButtonNav";
interface IHome {
  id: number;
}
export const Home = (params: IHome) => {
  return (
    <section className="Home">
      <div>
        <div className="page-section-introduction">
          <div className="text-content">
            <div>
              <h1>Собирать деньги на праздник стало легче</h1>
              <p>
                Создавай свое мероприятие, зови друзей и открывай общий сбор
                средств. Теперь не нужно миллионов чатов в социальных сетях, а
                все благодаря Foedus
              </p>
              <ButtonNav link={"/event"} className={"makeevent"} text={"Попробовать"} />
            </div>
          </div>
          <div className="media-content">
            <img className="circles" src={circles} alt="круги" />
            <img className="man" src={man} alt="мужчина в трусах" />
            <img className="dog" src={dog} alt="собака" />
          </div>
        </div>
      </div>
    </section>
  );
};
