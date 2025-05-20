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
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <h1 className="text-5xl md:text-7xl mb-5 tracking-tighter text-white">
          Generate Your Personal Portfolio
        </h1>
        <p className="italic text-sm md:text-2xl mb-10 tracking-normal text-white">
          Fill in your name, contact info, profile picture, projects and links{" "}
          <br />– then customize the style to make the portfolio truly your own.
        </p>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleClick}
          style={{
            backgroundColor: hover ? "transparent" : accentColor,
            color: hover ? bgColor : bgColor,
            borderColor: hover ? bgColor : "transparent",
            transition: "all 0.2s ease-in-out",
          }}
          className="cursor-pointer px-10 py-1 flex items-center justify-center border-2 rounded-full text-2xl"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};
export default AboveFold;
