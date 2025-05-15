import { useContext, useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FormContext } from "../providers/FormContext";

const FormToggleBtn = ({ text, posY, posX, direction, func }) => {
  const {
    toggleForm,
    setToggleForm,
    fontColor,
    accentColor,
    SetFirstTimeUser,
  } = useContext(FormContext);

  const [showButton, setShowButton] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowButton(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerStyle = {
    color: isHovered ? fontColor : accentColor,
    transition: "color 0.3s ease",
  };

  const iconStyleLeft = {
    transform: isHovered ? "translateX(-4px)" : "translateX(0)",
    transition: "transform 0.3s ease",
  };

  const iconStyleRight = {
    transform: isHovered ? "translateX(+4px)" : "translateX(0)",
    transition: "transform 0.3s ease",
  };

  const handleClick = () => {
    SetFirstTimeUser(false);
    setToggleForm(!toggleForm);
    setIsHovered(false);

    if (direction === "right" && typeof func === "function") {
      func();
    }
  };

  return (
    <div>
      {showButton && (
        <div
          className={`fixed ${posY} ${posX} transform -translate-x-1 z-50 cursor-pointer text-xl font-medium flex items-center gap-2`}
          style={containerStyle}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {direction == "left" ? (
            <>
              <FiArrowLeft size={30} style={iconStyleLeft} />
              <span>{text}</span>
            </>
          ) : (
            <>
              <span>{text}</span>
              <FiArrowRight size={30} style={iconStyleRight} />
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default FormToggleBtn;
