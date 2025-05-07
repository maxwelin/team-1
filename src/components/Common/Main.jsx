import { useContext } from "react";
import Form from "../Form/Form";
import Portfolio from "../Portfolio/Portfolio";
import { FormContext } from "../providers/FormContext";
import { LuFilePenLine } from "react-icons/lu";

const Main = () => {
  const { toggleForm, setToggleForm } = useContext(FormContext);
  return (
    <>
      <div
        className="flex bg-white cursor-pointer p-1 pl-3 box-border rounded-3xl w-14 hover:bg-black hover:text-white"
        onClick={() => setToggleForm(!toggleForm)}
      >
        <LuFilePenLine size={32} />
      </div>
      {toggleForm ? <Form /> : <Portfolio />}
    </>
  );
};
export default Main;
