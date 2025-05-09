import { useState, useContext } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { FormContext } from "../providers/FormContext";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { aboutMe } = useContext(FormContext);


  return (
    <div className="bg-black text-4xl text-white py-6">
      <div className="flex justify-between items-start gap-10">
        <div className="border-t border-b border-white w-full max-w-[100%]">
          <div
            className="flex justify-between items-center py-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-4xl">About Me</span>
            <span className="text-4xl">
              {isOpen ? <HiOutlineMinus /> : <GoPlus />}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[1000px] pt-6" : "max-h-0"
            }`}
          >
            <div className="w-full text-white p-4 rounded-md text-lg">
              <h1 className="text-4xl">Om Mig</h1>
              {aboutMe || "Ingen text angiven."} 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

//test// 
