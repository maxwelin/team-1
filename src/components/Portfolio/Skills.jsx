import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-4xl text-white py-6">
      <div className="flex justify-between items-start gap-10">
        <div className="border-t border-b border-white w-full max-w-[100%]">
          <div
            className="flex justify-between items-center py-4 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="4xl">SKILLS</span>
            <span className="4xl">
              {isOpen ? <HiOutlineMinus /> : <GoPlus />}
            </span>
          </div>
          <div
            className={`overflow-hidden flex justify-around transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[1000px] pt-20" : "max-h-0"
            }`}
          >
            <p className="text-lg text-white">React</p>
            <p className="text-lg text-white">Html</p>
            <p className="text-lg text-white">CSS</p>
            <p className="text-lg text-white">Tailwind CSS</p>
            <p className="text-lg text-white">Framer motion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
