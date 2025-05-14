import { useContext, useEffect, useState } from "react";
import Form from "../Form/Form";
import Portfolio from "../Portfolio/Portfolio";
import { FormContext } from "../providers/FormContext";
import { FiArrowLeft } from "react-icons/fi";

const Main = () => {
  const { toggleForm, setToggleForm, fontColor, accentColor } =
    useContext(FormContext);
  const [showButton, setShowButton] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  let scrollTimeout = null;

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setShowButton(true);
      }, 300); // visar igen 300ms efter att man slutat scrolla
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {toggleForm ? (
        <Form />
      ) : (
        <>
          {showButton && (
            <div
              className="fixed top-8 left-10 transform -translate-x-1 z-50 cursor-pointer text-xl font-medium transition-colors duration-300 flex items-center gap-2"
              style={{
                color: isHovered ? fontColor : accentColor,
              }}
              onClick={() => setToggleForm(!toggleForm)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FiArrowLeft
                size={30}
                style={{
                  transform: isHovered ? "translateX(-4px)" : "translateX(0)",
                  transition: "transform 0.3s ease",
                }}
              />
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
