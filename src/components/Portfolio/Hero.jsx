import { useContext, useState } from "react";
import { FormContext } from "../providers/FormContext";
import CVViewer from "./CVViewer";

import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";

const Hero = () => {
  const { firstName, lastName, school, education, profilePic } =
    useContext(FormContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mt-10 mb-[200px] 3xl:mb-[120px]">
      <div className="bg-black text-white text-6xl tracking-tighter">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h1 className="font-bold">
              <span className="text-white">HI. I'M </span>
              <span className="text-[#FF58C7]">
                {firstName} {lastName}
              </span>
            </h1>
            <h2 className="text-5xl font-light mt-2">STUDENT AT {school}</h2>
            <h2 className="text-5xl font-light mb-8 mt-2">({education})</h2>

            <div className="text-[#FF58C7]">
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
                <div className="absolute top-4 left-4 w-full h-full border-1 border-[#FF58C7] z-0"></div>

                {/* Själva bilden */}
                <img
                  className="relative z-10 h-[400px] w-[300px] 3xl:h-[480px] 3xl:w-[360px] object-center object-cover border-1 border-white"
                  src={profilePic}
                  alt=""
                />
              </>
            ) : (
              <>
                <div className="absolute top-4 left-4 w-full h-full border-1 border-[#FF58C7] z-0"></div>
                <div className="relative z-10 h-[400px] w-[300px] 3xl:h-[480px] 3xl:w-[360px] object-center object-cover border-1 bg-black border-white grid place-content-center">
                  {/* <CgProfile className="text-white text-[200px]" /> */}
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
