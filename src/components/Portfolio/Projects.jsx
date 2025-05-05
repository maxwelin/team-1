import { useState, useRef } from "react";

import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi2";
import Slider from "react-slick";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  var settings = {
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
              <span className="text-4xl">PROJECTS</span>
              <span className="text-4xl ">
                {isOpen ? <HiOutlineMinus /> : <GoPlus />}
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[1000px] pt-20" : "max-h-0"
              }`}
            >
              <div className="relative text-center pb-20">
                <>
                  <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className="absolute left-0 top-0 translate-y-[50%] text-white text-[14px] z-10 md:text-[20px] tracking-widest rotate-[-90deg] hover:underline underline-offset-4 bg-black px-1 py-0.5 rounded cursor-pointer"
                  >
                    BACK
                  </button>
                  <Slider ref={sliderRef} {...settings}>
                    <div>
                      <h3>Lorem</h3>
                    </div>
                    <div>
                      <h3>Ipsum</h3>
                    </div>
                    <div>
                      <h3>För</h3>
                    </div>
                    <div>
                      <h3>Helvete</h3>
                    </div>
                  </Slider>
                  <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="absolute right-0 top-0 translate-y-[50%] text-white text-[14px] md:text-[20px] hover:underline underline-offset-4 z-10 tracking-widest rotate-[-90deg] bg-black px-1 py-0.5 rounded cursor-pointer"
                  >
                    NEXT
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
