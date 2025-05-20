import { useContext } from "react";
import Form from "../Form/Form";
import Portfolio from "../Portfolio/Portfolio";
import { FormContext } from "../providers/FormContext";
import FormToggleBtn from "./FormToggleBtn";
import AboveFold from "../Form/AboveFold";

const Main = () => {
  const { toggleForm } = useContext(FormContext);

  return (
    <>
      {toggleForm ? (
        <>
          <Form />
        </>
      ) : (
        <>
          <FormToggleBtn
            text="Back to form"
            posY="top-8"
            posX="left-10"
            direction="left"
          />
          <Portfolio />
        </>
      )}
    </>
  );
};

export default Main;
