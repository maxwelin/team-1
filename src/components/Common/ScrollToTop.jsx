import { useEffect, useState } from "react";

import { useContext } from "react";
import { FormContext } from "../providers/FormContext";

import { FiArrowUpCircle } from "react-icons/fi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const { fontColor, accentColor } = useContext(FormContext);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            color: isHovering ? accentColor : fontColor,
            transform: isHovering ? "scale(1.25)" : "scale(1)",
            transition: "all 0.3s ease",
          }}
          className="cursor-pointer hidden lg:flex fixed bottom-20 right-14 w-10 h-10 rounded-full items-center justify-center shadow-lg transition-all duration-300"
        >
          <FiArrowUpCircle className="w-10 h-10" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
