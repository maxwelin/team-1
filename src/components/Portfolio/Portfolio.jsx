import About from "./About";
import Projects from "./Projects";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "./Footer";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};
export default Portfolio;
