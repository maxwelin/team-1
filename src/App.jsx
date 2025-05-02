import "./App.css";
import Form from "./components/Form/Form";
import Hero from "./components/Portfolio/Hero";
import Projects from "./components/Portfolio/Projects";
import Skills from "./components/Portfolio/Skills";

function App() {
  return (
    <>
      <h1 className="text-5xl text-center bg-primary">Hello world</h1>
      <p className="text-2xl text-center bg-secondary">from team one</p>
      <Hero />
      <Skills />
      <Form />
      <Projects />
    </>
  );
}

export default App;
