import { useContext, useEffect, useState } from "react";
import Form from "../Form/Form";
import Portfolio from "../Portfolio/Portfolio";
import { FormContext } from "../providers/FormContext";
import { FiArrowLeft } from "react-icons/fi";

const Main = () => {
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

  const iconStyle = {
    transform: isHovered ? "translateX(-4px)" : "translateX(0)",
    transition: "transform 0.3s ease",
  };

  return (
    <>
      {toggleForm ? (
        <Form />
      ) : (
        <>
          {showButton && (
            <div
              className="fixed top-8 left-10 transform -translate-x-1 z-50 cursor-pointer text-xl font-medium flex items-center gap-2"
              style={containerStyle}
              onClick={() => {
                SetFirstTimeUser(false);
                setToggleForm(!toggleForm);
                setIsHovered(false);
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FiArrowLeft size={30} style={iconStyle} />
              <span>Back to form</span>
            </div>
          )}
          <Portfolio />
        </>
      )}
    </>
  );
};

export default Main;
