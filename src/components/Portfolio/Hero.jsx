import { useContext, useState } from "react";
import { FormContext } from "../providers/FormContext";
import CVViewer from "./CVViewer";

import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const Hero = () => {
  const {
    firstName,
    lastName,
    school,
    education,
    profilePic,
    accentColor,
    fontFamily,
  } = useContext(FormContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mt-[10%] mb-[5%]  max-w-full">
      <div className="flex flex-col-reverse xl:flex-row items-start gap-10">
        {/* 📝 TEXT */}
        <div className="w-full xl:w-[80%]">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold ${
              fontFamily === "Impact"
                ? "tracking-normal leading-normal"
                : "tracking-tight leading-tight"
            }`}
          >
            <span>HI! I'M </span>
            <span className="whitespace-nowrap" style={{ color: accentColor }}>
              {firstName} {lastName}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-light mt-2">
            {school}
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-3 mb-8">
            {education}
          </h2>

          {/* 📎 CV-länk */}
          <div style={{ color: accentColor }}>
            <div className="border-t-2 border-b-2 w-full max-w-full">
              <div
                className={`flex justify-between items-center py-1 cursor-pointer transition-all duration-200 ${
                  !isOpen && "hover:pb-2"
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-xl sm:text-2xl">CV</span>
                <span className="text-3xl sm:text-4xl transition-all">
                  {isOpen ? <HiOutlineMinus /> : <GoPlus />}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[1400px] pt-2" : "max-h-0"
                }`}
              >
                <CVViewer />
              </div>
            </div>
          </div>
        </div>

        {/* 🖼️ BILD */}
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-end mb-10">
          <div className="relative w-fit">
            {profilePic ? (
              <>
                <div
                  style={{ borderColor: accentColor }}
                  className="absolute top-4 left-4 w-full h-full border-2 rounded-2xl z-0"
                ></div>
                <img
                  className="relative z-10 object-cover rounded-2xl
                    w-[220px] h-[280px]
                    sm:w-[220px] sm:h-[280px]
                    md:w-[260px] md:h-[340px]
                    xl:w-[300px] xl:h-[400px]"
                  src={profilePic}
                  alt="Profile"
                />
              </>
            ) : (
              <>
                <div
                  style={{ borderColor: accentColor }}
                  className="absolute top-4 left-4 w-full h-full border-2 rounded-2xl z-0"
                ></div>
                <div
                  className="relative z-10 grid place-content-center bg-gray-100 rounded-xl
                    w-[220px] h-[280px]
                    sm:w-[220px] sm:h-[280px]
                    md:w-[260px] md:h-[340px]
                    xl:w-[300px] xl:h-[400px]"
                >
                  <CgProfile className="text-[100px] sm:text-[140px] text-gray-400" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
