import { useState, useContext } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { FormContext } from "../providers/FormContext";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { aboutMe, header } = useContext(FormContext);

  return (
    <div className="bg-black text-white py-6 mb-[260px]">
      <h1 className="text-9xl mb-4 tracking-tighter">{header}</h1>
      <div className="flex justify-between items-start gap-10">
        <div className="border-t border-b border-white w-full max-w-[100%]">
          <div
            className={`flex justify-between items-center py-1 cursor-pointer transition-all duration-200 ${
              !isOpen && "hover:pb-2"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl tracking-tighter">ABOUT ME</span>
            <span className="text-4xl">
              {isOpen ? <HiOutlineMinus /> : <GoPlus />}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-[1000px] pt-6" : "max-h-0"
            }`}
          >
            <div className="w-full text-white p-4 rounded-md text-lg">
              {aboutMe || "Ingen text angiven."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
