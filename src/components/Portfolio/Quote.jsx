import { useState, useContext } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { FormContext } from "../providers/FormContext";

const Quote = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { QuoteMe, header } = useContext(FormContext);

  return (
    <div className="bg-black text-4xl text-white py-6 mt-[200px] relative">
      <h1 className="text-8xl mb-2 tracking-tighter mb-10">
        "Well, it is what it is because he who is who he is"
      </h1>
      <p className="text-lg justify-end absolute right-0 italic">-Joe Biden</p>
    </div>
  );
};

export default Quote;
