import { useState, useContext } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { FormContext } from "../providers/FormContext";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { skills, accentColor, experience } = useContext(FormContext);

  return (
    <div className="text-4xl py-6">
      <div className="flex justify-between items-start gap-10">
        <div
          style={{ borderColor: accentColor }}
          className="border-t border-b w-full max-w-[100%]"
        >
          <div
            style={{ color: accentColor }}
            className={`flex justify-between items-center py-1 cursor-pointer transition-all duration-200 ${
              !isOpen && "hover:pb-2"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">Technical skills</span>
            <span className="text-4xl">
              {isOpen ? <HiOutlineMinus /> : <GoPlus />}
            </span>
          </div>
          <div
            className={`overflow-hidden flex justify-around transition-all duration-500 ${
              isOpen ? "max-h-[1000px] pt-20" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap items-center justify-around">
                {skills.map((skill, index) => (
                  <p
                    key={index}
                    className="text-5xl font-bold flex-grow-0 flex-shrink-0 basis-1/5"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              {experience && (
                <span
                  style={{ color: accentColor }}
                  className="text-lg w-1/2 mt-2"
                >
                  {experience}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
