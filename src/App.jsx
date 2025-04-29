import "./App.css";
import Hero from "./components/Portfolio/Hero";
import Skills from "./components/Portfolio/Skills";

function App() {
  return (
    <>
      <h1 className="text-5xl text-center bg-primary">Hello world</h1>
      <p className="text-2xl text-center bg-secondary">from team one</p>
      <Hero />
      <Skills />
    </>
  );
}

export default App;
