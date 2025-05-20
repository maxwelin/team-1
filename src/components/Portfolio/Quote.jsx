import { useContext } from "react";
import { FormContext } from "../providers/FormContext";

const Quote = () => {
  const { quote, source } = useContext(FormContext);

  return (
    <div className=" text-4xl  py-6 mt-[300px] relative">
      {quote && (
        <h1 className="text-8xl tracking-tighter mb-10 italic">"{quote}"</h1>
      )}
      {source && (
        <p className="text-lg justify-end absolute right-0">-{source}</p>
      )}
    </div>
  );
};

export default Quote;
