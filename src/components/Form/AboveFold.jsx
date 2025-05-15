import { useContext } from "react";
import { FormContext } from "../providers/FormContext";

const AboveFold = () => {
  const { accentColor, bgColor, formRef } = useContext(FormContext);

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
    <div className="min-h-[90vh]  w-full flex flex-col pt-60 items-center mb-20">
      <h1 className="text-7xl mb-10 tracking-tighter">
        Build Your Personal Portfolio
      </h1>
      <p className="italic text-2xl mb-20 tracking-normal">
        Fill in your name, contact info, profile picture, projects and links –
        then customize the style to make the portfolio truly your own.
      </p>
      <button
        style={{ backgroundColor: accentColor, color: bgColor }}
        className="h-15 w-[300px] rounded-4xl text-2xl cursor-pointer tracking-tighter"
        onClick={handleClick}
      >
        Get Started
      </button>
    </div>
  );
};
export default AboveFold;
