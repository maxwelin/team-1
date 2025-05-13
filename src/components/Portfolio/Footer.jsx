import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { FormContext } from "../providers/FormContext";
import { GoPlus } from "react-icons/go"; // plus icon
import { HiOutlineMinus } from "react-icons/hi2"; // minus icon
import { FiMail, FiPhone } from "react-icons/fi"; // icons for email and phone
import { FaGithub, FaLinkedin } from "react-icons/fa"; // icons for GitHub and LinkedIn

const Footer = () => {
  const { firstName, lastName, email, phoneNumber, githubURL, linkedInURL } =
    useContext(FormContext);
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleFooter = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="bg-black text-white text-xl mx-10 my-10">
      <h1 className="text-8xl text-center mb-2">Let's Connect</h1>

      {/* upper line */}
      <div className="w-full mx-auto border-b-1 border-[#FF58C7]" />

      {/* clickable area */}
      <div
        className={`flex justify-between items-center py-1 cursor-pointer transition-all duration-200 ${
          !isOpen && "hover:pb-2"
        }`}
        onClick={toggleFooter}
      >
        {/* always show firstName and lastName */}
        <h2 className="text-4xl text-[#FF58C7]">
          {firstName} {lastName}
        </h2>
        {isOpen ? (
          <HiOutlineMinus className="text-2xl text-[#FF58C7]" />
        ) : (
          <GoPlus className="text-2xl text-[#FF58C7]" />
        )}
      </div>

      {/* animated section */}
      <div
        style={{
          maxHeight: isOpen ? `${height + 16}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.5s ease, opacity 0.5s ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="mt-3 flex justify-center pb-8">
          <div className="flex items-start gap-70">
            {/* email and phone */}
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-xl hover:text-[#FF58C7] transition-colors"
              >
                <FiMail className="text-[#FF58C7]" />
                <span className="underline">{email}</span>
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 text-xl hover:text-[#FF58C7] transition-colors"
              >
                <FiPhone className="text-[#FF58C7]" />
                <span>{phoneNumber}</span>
              </a>
            </div>

            {/* github and linkedin */}
            <div className="flex gap-7 pt-8">
              <a
                href={githubURL}
                className="flex items-center gap-2 text-xl hover:text-[#FF58C7] transition-colors"
              >
                <FaGithub className="text-[#FF58C7]" />
                <span>GitHub</span>
              </a>
              <a
                href={linkedInURL}
                className="flex items-center gap-2 text-xl hover:text-[#FF58C7] transition-colors"
              >
                <FaLinkedin className="text-[#FF58C7]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="w-full mx-auto border-b-1 border-[#FF58C7]" />
    </div>
  );
};

export default Footer;
