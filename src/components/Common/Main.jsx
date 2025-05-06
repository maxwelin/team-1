import { useContext } from "react";
import Form from "../Form/Form";
import Portfolio from "../Portfolio/Portfolio";
import { FormContext } from "../Providers/FormContext";

const Main = () => {
  const { toggleForm, setToggleForm } = useContext(FormContext);
  return (
    <>
      <button
        className="w-[45%] h-10 rounded-3xl mb-2 bg-white cursor-pointer"
        onClick={() => setToggleForm(!toggleForm)}
      >
        hej klicka på mig för att toggla fomuläret
      </button>
      {toggleForm ? <Form /> : <Portfolio />}
    </>
  );
};
export default Main;
