import "./App.css";
import Layout from "./components/Common/Layout";
import SocialBarScroller from "./components/Common/SocialBarScroller";
import { FormContextProvider } from "./components/providers/FormContext";

function App() {
  return (
    <FormContextProvider>
      <div className="relative">
        <SocialBarScroller />
      </div>
      <Layout />
    </FormContextProvider>
  );
}

export default App;
