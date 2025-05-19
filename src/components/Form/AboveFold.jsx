import { useContext, useState } from "react";
import { FormContext } from "../providers/FormContext";

const AboveFold = () => {
  const { accentColor, bgColor, fontColor, formRef } = useContext(FormContext);

  const [hover, setHover] = useState(false);

  const handleClick = () => {
    if (formRef.current) {
      const offset = 50;
      const top =
        formRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[100vh] w-full">
      <div className="absolute w-full h-[100dvh] bg-black/40 z-10"></div>
      <div
        style={{ backgroundImage: "url(/hero.jpg" }}
        className=" flex flex-col pt-[20%] items-center mb-20 bg-no-repeat bg-cover min-h-[100dvh]"
      >
        <h1 className="text-7xl mb-5 tracking-tighter text-white z-100">
          Generate Your Personal Portfolio
        </h1>
        <p className="italic text-2xl mb-10 tracking-normal text-white z-100">
          Fill in your name, contact info, profile picture, projects and links{" "}
          <br />– then customize the style to make the portfolio truly your own.
        </p>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleClick}
          style={{
            backgroundColor: hover ? bgColor : accentColor,
            color: hover ? fontColor : bgColor,
            borderColor: hover ? fontColor : accentColor,
            transition: "all 0.2s ease-in-out",
          }}
          className="cursor-pointer h-10 w-[300px] items-center border-2 border- rounded-4xl text-2xl z-100"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};
export default AboveFold;
