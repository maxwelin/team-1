import { useContext } from "react";
import { FormContext } from "../providers/FormContext";

const CVViewer = () => {
  const { cvFile, fontColor } = useContext(FormContext);

  if (!cvFile) {
    return (
      <p style={{ color: fontColor }} className="text-lg py-4">
        Inget CV uppladdat ännu.
      </p>
    );
  }

  const pdfUrl = URL.createObjectURL(cvFile);

  return (
    <div className="flex justify-center py-8">
      <div className="bg-white rounded-xl max-w-[800px] w-full">
        <iframe
          src={pdfUrl}
          title="CV"
          width="100%"
          height="1140px"
          className="rounded border border-gray-300"
        />
      </div>
    </div>
  );
};

export default CVViewer;
