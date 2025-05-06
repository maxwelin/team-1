import "./App.css";
import Main from "./components/Common/Main";
import { FormContextProvider } from "./components/providers/FormContext";

function App() {
  return (
    <FormContextProvider>
      <div className="grid grid-cols-9 bg-black">
        <div className="col-start-2 col-end-9 pt-[200px]">
          <Main />
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
