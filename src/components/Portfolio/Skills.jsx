import { useState, useContext, useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { FormContext } from "../providers/FormContext";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMarquee, setShowMarquee] = useState(false);
  const { skills, accentColor, bgColor, experience } = useContext(FormContext);

  useEffect(() => {
    let timeout;
    if (isOpen) {
      timeout = setTimeout(() => {
        setShowMarquee(true);
      }, 100);
    } else {
      setShowMarquee(false);
    }

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <div className="text-4xl py-6 mt-20">
      <div className="flex justify-between items-start gap-10">
        <div
          style={{ borderColor: accentColor }}
          className="border-t-2 border-b-2 w-full max-w-[100%]"
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
              isOpen ? "max-h-[1000px] pt-26" : "max-h-0"
            }`}
          >
            <div className="w-full mb-20">
              {showMarquee && (
                <Marquee
                  key={isOpen ? "open" : "closed"}
                  pauseOnHover="true"
                  gradient="true"
                  gradientColor={bgColor}
                  gradientWidth="300px"
                  speed="100"
                  style={{}}
                >
                  {skills.map((skill, index) => (
                    <p
                      key={index}
                      className="text-6xl font-bold flex-grow-0 flex-shrink-0 basis-1/5 mr-30 overflow-hidden pb-1 mb-4"
                    >
                      {skill}
                    </p>
                  ))}
                </Marquee>
              )}
              <div className="text-xl w-1/2">
                {experience && (
                  <span style={{ color: accentColor }}>{experience}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
