import { useContext, useState } from "react";
import { FormContext } from "../providers/FormContext";
import CVViewer from "./CVViewer";

import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const Hero = () => {
  const { firstName, lastName, school, education, profilePic, accentColor } =
    useContext(FormContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mt-30 mb-20">
      <div className="  text-6xl tracking-tighter">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h1 className="font-bold">
              <span className="">HI. I'M </span>
              <span style={{ color: accentColor }} className="">
                {firstName} {lastName}
              </span>
            </h1>
            <h2 className="text-4xl font-light mt-3">STUDENT @ {school}</h2>
            <h2 className="text-5xl tracking-tight font-bold mb-8 mt-3">
              ({education})
            </h2>

            <div style={{ color: accentColor }} className="">
              <div className="border-t border-b w-full max-w-[900px]">
                <div
                  className={`flex justify-between items-center py-1 cursor-pointer transition-all duration-200 ${
                    !isOpen && "hover:pb-2"
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-2xl">CV</span>
                  <span className="text-4xl transition-all">
                    {isOpen ? <HiOutlineMinus /> : <GoPlus />}
                  </span>
                </div>
                {isOpen && <CVViewer />}
              </div>
            </div>
          </div>

          <div className="shrink-0 relative w-fit mt-[-0%]">
            {profilePic ? (
              <>
                {/* Offset ram bakom bilden */}
                <div
                  style={{ borderColor: accentColor }}
                  className="absolute top-4 left-4 w-full h-full border-2 rounded-2xl z-0"
                ></div>

                {/* Själva bilden */}
                <img
                  className="relative z-10 w-[180px] h-[240px] sm:w-[220px] sm:h-[280px] md:w-[260px] md:h-[340px] xl:w-[300px] xl:h-[400px] object-cover rounded-xl"
                  src={profilePic}
                  alt=""
                />
              </>
            ) : (
              <>
                <div
                  style={{ borderColor: accentColor }}
                  className="absolute top-4 left-4 w-full h-full border-1 ] z-0"
                ></div>
                <div className="relative z-10 h-[400px] w-[300px] object-center object-cover border-1   grid place-content-center">
                  {/* <CgProfile className=" text-[200px]" /> */}
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
