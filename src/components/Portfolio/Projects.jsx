import { useState, useRef, useContext } from "react";

import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Slider from "react-slick";
import { FormContext } from "../providers/FormContext";

const Projects = () => {
  const { accentColor, projList, fontColor } = useContext(FormContext);

  console.log(projList);

  const [isOpen, setIsOpen] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [hoverBack, setHoverBack] = useState(false);

  var settings = {
    centerMode: true,
    centerPadding: "260px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  return (
    <section className="mb-2">
      <div className="  text-6xl">
        <div className="flex justify-between items-start gap-10">
          <div
            style={{ borderColor: accentColor }}
            className="border-t-2 border-b-2  w-full max-w-[100%]"
          >
            <div
              style={{ color: accentColor }}
              className={`flex justify-between items-center py-1 cursor-pointer transition-all duration-200 ${
                !isOpen && "hover:pb-2"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-2xl tracking-tighter">My projects</span>
              <span className="text-4xl ">
                {isOpen ? <HiOutlineMinus /> : <GoPlus />}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-[1000px] pb-20 pt-56" : "max-h-0"
              }`}
            >
              <div className="relative text-center pb-50 overflow-visible">
                {projList.length > 1 ? (
                  <>
                    <button
                      onClick={() => sliderRef.current.slickPrev()}
                      onMouseEnter={() => setHoverBack(true)}
                      onMouseLeave={() => setHoverBack(false)}
                      style={{
                        color: hoverBack ? accentColor : fontColor,
                        transform: hoverBack ? "scale(1)" : "scale(0.8)",
                        transition: "all 0.3s ease",
                      }}
                      className="cursor-pointer z-10 absolute bottom-2/3 left-40 rounded-full items-center justify-center shadow-lg transition-all duration-300"
                    >
                      <IoIosArrowDropleftCircle />
                    </button>
                    <Slider ref={sliderRef} {...settings}>
                      {projList.map((proj, i) => (
                        <a
                          href={proj.link}
                          target="_blank"
                          key={i}
                          className="bg-[#D9D9D9] w-[600px] h-[300px] relative"
                        >
                          <img
                            src={proj.img}
                            alt=""
                            className={`object-cover w-full max-h-full ${
                              proj.link.length > 0 ? "hover:scale-102" : ""
                            }  transition-all duration-150`}
                          />
                          <h3 className="overflow-hidden absolute left-1/2 -translate-x-1/2 -bottom-[calc(-100%-1.5rem)] z-10 text-4xl tracking-tighter w-full">
                            {proj.title}
                          </h3>
                          <p className="absolute overflow-hidden left-1/2 -translate-x-1/2 top-[calc(100%+3.5rem)] z-10 text-lg tracking-tighter">
                            {proj.desc}
                          </p>
                        </a>
                      ))}
                    </Slider>
                    <button
                      onClick={() => sliderRef.current.slickNext()}
                      onMouseEnter={() => setHoverNext(true)}
                      onMouseLeave={() => setHoverNext(false)}
                      style={{
                        color: hoverNext ? accentColor : fontColor,
                        transform: hoverNext ? "scale(1)" : "scale(0.8)",
                        transition: "all 0.3s ease",
                      }}
                      className="cursor-pointer z-10 absolute bottom-2/3 right-40 rounded-full items-center justify-center shadow-lg transition-all duration-300"
                    >
                      <IoIosArrowDroprightCircle />
                    </button>
                  </>
                ) : (
                  <>
                    <div className=" w-[900px] h-[450px] relative ml-auto mr-auto ">
                      <img
                        src={projList[0]?.img}
                        alt=""
                        className={`object-cover w-full max-h-full ${
                          projList[0].link.length > 0 ? "hover:scale-102" : ""
                        }  transition-all duration-150`}
                      />
                      <h3 className="absolute left-1/2 overflow-hidden -translate-x-1/2  -bottom-[calc(-100%-1.5rem)] z-10 text-4xl tracking-tighter">
                        {projList[0]?.title}
                      </h3>
                      <h3 className="absolute left-1/2 overflow-hidden -translate-x-1/2 top-[calc(100%+2rem)] z-10 text-xl tracking-tighter">
                        {projList[0]?.desc}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
