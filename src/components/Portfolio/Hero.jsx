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
    <section className="my-20">
      <div className="bg-black text-white text-6xl tracking-tighter">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h1 className="font-bold text-[#FF58C7]">
              HI. IM {firstName} {lastName}
            </h1>
            <h2 className="text-5xl font-light mt-2">STUDENT AT {school}</h2>
            <h2 className="text-5xl font-light mb-8 mt-2">({education})</h2>

            <div className="border-t border-b border-white w-full max-w-[900px]">
              <div
                className="flex justify-between items-center py-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-4xl">CV</span>
                <span className="text-4xl transition-all">
                  {isOpen ? <HiOutlineMinus /> : <GoPlus />}
                </span>
              </div>
              {isOpen && <CVViewer />}
            </div>
          </div>

          <div className="shrink-0">
            {profilePic ? (
              <img
                className="h-[400px] w-[400px] rounded-[50%] mt-[-18%] object-center object-cover border-4 border-[#FF58C7]"
                src={profilePic}
                alt=""
              />
            ) : (
              <CgProfile className="text-white text-[220px] " />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
