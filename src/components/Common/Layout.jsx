import { useContext } from "react";
import { FormContext } from "../providers/FormContext";
import Main from "./Main";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  const { bgColor, fontColor, fontFamily } = useContext(FormContext);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        fontFamily: fontFamily,
        borderColor: fontColor,
      }}
    >
      <div className="grid grid-cols-7">
        <div className="col-start-2 col-end-7 pt-[120px]">
          <Main />
        </div>
      </div>
      <div className="col-start-7 col-span-full flex justify-end items-end p-4">
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Layout;
