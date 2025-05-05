import "./App.css";
import Form from "./components/Form/Form";
import About from "./components/Portfolio/About";
import Footer from "./components/Portfolio/Footer";
import Hero from "./components/Portfolio/Hero";
import Projects from "./components/Portfolio/Projects";
import Skills from "./components/Portfolio/Skills";
import { FormContextProvider } from "./components/providers/FormContext";

function App() {
  return (
    <FormContextProvider>
      <div className="grid grid-cols-9 bg-black">
        <div className="col-start-2 col-end-9 pt-[200px]">
          <Hero />
          <About />
          <Skills />
          <Form />
          <Projects />
          <Footer />
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
