import "./App.css";
import Main from "./components/Common/Main";
import ScrollToTop from "./components/Common/ScrollToTop";
import { FormContextProvider } from "./components/providers/FormContext";

function App() {
  return (
    <FormContextProvider>
      <div className="grid grid-cols-9 bg-black">
        <div className="col-start-2 col-end-9 pt-[120px]">
          <Main />
        </div>
      </div>
      <div className="col-start-9 col-end-10 flex justify-end items-end p-4 bg-black">
        <ScrollToTop />
      </div>
    </FormContextProvider>
  );
}

export default App;
