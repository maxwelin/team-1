import { useContext, useState } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FormContext } from "../providers/FormContext";

const FormToggleBtn = ({ text, posY, posX, direction, func }) => {
  const {
    toggleForm,
    setToggleForm,
    fontColor,
    accentColor,
    setFirstTimeUser,
  } = useContext(FormContext);

  const [isHovered, setIsHovered] = useState(false);

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
    setFirstTimeUser(false);
    setToggleForm(!toggleForm);
    setIsHovered(false);

    if (direction === "right" && typeof func === "function") {
      func();
    }
  };

  return (
    <div>
      <div
        className={`fixed ${posY} ${posX} transform -translate-x-1 z-50 cursor-pointer text-xl font-medium flex items-center gap-2`}
        style={containerStyle}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {direction == "left" ? (
          <>
            <FiArrowLeftCircle size={30} style={iconStyleLeft} />
            <span>{text}</span>
          </>
        ) : (
          <>
            <span>{text}</span>
            <FiArrowRightCircle size={30} style={iconStyleRight} />
          </>
        )}
      </div>
    </div>
  );
};
export default FormToggleBtn;
