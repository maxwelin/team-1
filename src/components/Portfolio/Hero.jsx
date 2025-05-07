import { useContext, useState } from "react";

import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { FormContext } from "../providers/FormContext";

const Hero = () => {
  const { firstName, lastName, school, education, profilePic } =
    useContext(FormContext);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="">
      <div className="bg-black text-white text-6xl">
        <div className="flex justify-between items-start gap-10">
          <div className="flex flex-col">
            <h1 className="font-bold">
              HI. IM {firstName} {lastName}
            </h1>
            <h2 className="text-6xl">STUDENT AT {school}</h2>
            <h2 className="text-6xl mb-8">({education})</h2>

            <div className="border-t border-b border-white w-full max-w-[700px]">
              <div
                className="flex justify-between items-center py-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-4xl">CV</span>
                <span className="text-4xl transition-all">
                  {isOpen ? <HiOutlineMinus /> : <GoPlus />}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[1000px] pt-20" : "max-h-0"
                }`}
              >
                <p className="text-lg text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                  alias quam asperiores, obcaecati quasi, et praesentium labore
                  dolorem saepe minus pariatur, molestiae nam ipsa atque
                  excepturi. Recusandae totam repellat possimus. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Cumque quis, eum
                  facilis voluptatem consectetur ut! Provident maiores itaque ea
                  illum ab dolor distinctio dicta at delectus recusandae
                  eligendi, quos beatae? Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Delectus, aut a mollitia nam sed sunt dolore
                  exercitationem odio consequatur sit ullam hic incidunt
                  eligendi, eius quisquam fugit quasi, atque excepturi?
                </p>
              </div>
            </div>
          </div>

          <div className="shrink-0">
            {profilePic ? (
              <img
                className="h-[300px] w-[300px] rounded-[50%] object-center object-cover"
                src={profilePic}
                alt=""
              />
            ) : (
              <CgProfile className="text-white text-[220px]" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
