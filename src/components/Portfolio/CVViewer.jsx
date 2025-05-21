import { useContext } from "react";
import { FormContext } from "../providers/FormContext";
import { PiReadCvLogoFill } from "react-icons/pi";

const CVViewer = () => {
  const { cvFile, fontColor, accentColor } = useContext(FormContext);

  if (!cvFile) {
    return (
      <p style={{ color: fontColor }} className="text-lg py-4">
        Inget CV uppladdat ännu.
      </p>
    );
  }

  const pdfUrl = URL.createObjectURL(cvFile);

  return (
    <div
      style={{ color: fontColor }}
      className="flex flex-col justify-center py-6 "
    >
      <div className="bg-white rounded-xl max-w-[800px] w-full">
        <iframe
          src={pdfUrl}
          title="CV"
          width="100%"
          height="1024px"
          className="rounded border border-gray-300"
        />
      </div>
      <a
        href={pdfUrl}
        download
        style={{ "--hover-color": accentColor }}
        className="inline-flex items-center gap-2 mt-4 cursor-pointer hover:text-[var(--hover-color)]"
      >
        Download CV
        <PiReadCvLogoFill size={26} />
      </a>
    </div>
  );
};

export default CVViewer;
