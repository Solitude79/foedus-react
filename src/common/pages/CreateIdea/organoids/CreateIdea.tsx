import { useEffect, useState } from "react";
import { InCreateIdea, IInCreateIdea } from "../logics/InCreateIdea";
import "../styles/CreateIdea.css";

interface ICreateIdea {
  eventID: string;
  requestInListEvent: () => Promise<void>;
}
export const CreateIdea = (params: ICreateIdea) => {
  const [value, setValue] = useState<IInCreateIdea>({
    eventId: params.eventID,
    title: "",
    description: "",
    moneyRequired: 3000,
    deadline: "",
  });
  const handleClick = async () => {
    try {
      const result = await InCreateIdea(value);
      if (result) {
        params.requestInListEvent();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("value", value);
  }, [value]);
  return (
    <div className="CreateIdea">
      <form
        className="CreateIdea__Form"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div className="CreateIdea__Input__Contaiter">
          <div className="CreateIdea__Input__Contaiter__Inputs">
            <div className="CreateIdea__Input__Contaiter__Inputs__LeftSide">
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
            </div>
            <div className="CreateIdea__Input__Contaiter__Inputs__RightSide">
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
                className="moneyRequired-input"
                type="number"
                placeholder="Количество средств"
                value={value.moneyRequired}
                onChange={(event: any) => {
                  setValue({
                    ...value,
                    moneyRequired: Number(event.target.value),
                  });
                }}
              />
            </div>
          </div>
          <input
            type="submit"
            className="CreateIdea__CreateEvent__Button"
            value={"Создать"}
          />
        </div>
      </form>
    </div>
  );
};
