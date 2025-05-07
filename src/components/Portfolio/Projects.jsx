import { useState, useRef } from "react";

import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import Slider from "react-slick";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <section>
      <div className="bg-black text-white text-6xl">
        <div className="flex justify-between items-start gap-10">
          <div className="border-t border-b border-white w-full max-w-[100%]">
            <div
              className="flex justify-between items-center py-1 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-4xl">MY PROJECTS</span>
              <span className="text-4xl ">
                {isOpen ? <HiOutlineMinus /> : <GoPlus />}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[1000px] pt-20" : "max-h-0"
              }`}
            >
              <div className="relative text-center pb-30 overflow-visible">
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="absolute left-5 top-[30%] text-white text-[14px] z-10 md:text-[20px] tracking-widest rotate-[-90deg] hover:bg-transparent hover:text-black bg-black px-1 py-0.5 rounded cursor-pointer"
                >
                  BACK
                </button>
                <Slider ref={sliderRef} {...settings}>
                  {["Lorem", "Ipsum", "För", "Helvete"].map((text, i) => (
                    <div className="bg-[#D9D9D9] w-[660px] h-[330px] relative">
                      <h3 className="absolute left-1/2 -translate-x-1/2 -top-15 z-10 text-5xl">
                        {text}
                      </h3>
                      <h3 className="absolute left-1/2 -translate-x-1/2 -bottom-15 z-10 text-5xl">
                        {text}
                      </h3>
                    </div>
                  ))}
                </Slider>
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="absolute right-5 top-[30%] text-white text-[14px] md:text-[20px] hover:bg-transparent  hover:text-black z-10 tracking-widest rotate-[-90deg] bg-black px-1 py-0.5 rounded cursor-pointer"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
