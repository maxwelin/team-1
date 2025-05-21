import { useState, useContext } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { FormContext } from "../providers/FormContext";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { about, header, accentColor, fontColor } = useContext(FormContext);

  return (
    <div className="py-6 mb-[300px]">
      <h1 className="text-9xl mb-4 tracking-tighter">{header}</h1>
      <div className="flex justify-between items-start gap-10">
        <div
          style={{ color: accentColor }}
          className="border-t-2 border-b-2 w-full max-w-[100%]"
        >
          <div
            className={`flex justify-between items-center py-1 cursor-pointer transition-all duration-200 ${
              !isOpen && "hover:pb-2"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl tracking-tighter">About me</span>
            <span className="text-4xl">
              {isOpen ? <HiOutlineMinus /> : <GoPlus />}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-[1000px] pt-6" : "max-h-0"
            }`}
          >
            <div style={{ color: fontColor }} className="w-full py-4 text-lg">
              {about || "Ingen text angiven."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
