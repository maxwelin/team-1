import About from "./About";
import Projects from "./Projects";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import Quote from "./Quote";
import { FormContext } from "../providers/FormContext";

const Portfolio = () => {
  const { projList } = useContext(FormContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="grid grid-cols-7">
      <div className="col-span-full">
        <Hero />
      </div>
      <div className="col-start-3 col-span-full">
        <About />
      </div>
      <div className="col-span-full">
        {projList.length > 0 && <Projects />}
        <Skills />
      </div>
      <div className="col-start-3 col-span-full">
        <Quote />
      </div>
      <div className="col-span-full">
        <Footer />
      </div>
    </div>
  );
};
export default Portfolio;
