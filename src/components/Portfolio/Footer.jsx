import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { FormContext } from "../providers/FormContext";
import { GoPlus } from "react-icons/go"; // plus icon
import { HiOutlineMinus } from "react-icons/hi2"; // minus icon
import { MdMail, MdLocalPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // icons for GitHub and LinkedIn

const Footer = () => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    githubURL,
    linkedInURL,
    location,
    author,
    accentColor,
  } = useContext(FormContext);
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const headerRef = useRef(null); // Ref for the header to measure its width
  const [headerWidth, setHeaderWidth] = useState("auto");

  const toggleFooter = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  useEffect(() => {
    if (headerRef.current) {
      // Get the width of the "Let's Connect" header
      setHeaderWidth(`${headerRef.current.offsetWidth + 60}px`);
    }
  }, []);

  return (
    <div className="text-xl mx-10 my-10 mt-[300px]">
      <div className="flex justify-center">
        <h1
          ref={headerRef}
          className="text-9xl text-center mb-2 inline-block tracking-tighter"
        >
          Let's Connect
        </h1>
      </div>
      {/* upper line */}
      <div
        className="mx-auto border-b-2"
        style={{ width: headerWidth, borderColor: accentColor }}
      />
      {/* clickable area */}
      <div
        className="flex justify-between items-center cursor-pointer py-1 mx-auto"
        style={{ width: headerWidth, color: accentColor }}
        onClick={toggleFooter}
      >
        {/* always show firstName and lastName */}
        <h2 className="text-2xl tracking-tighter">
          {firstName} {lastName}
        </h2>
        {isOpen ? (
          <HiOutlineMinus className="text-4xl" />
        ) : (
          <GoPlus className="text-4xl" />
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
        <div
          ref={contentRef}
          className="mt-10 flex justify-between pb-15 mx-auto"
          style={{ width: headerWidth, "--hover-color": accentColor }}
        >
          {/* email and phone */}
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 text-xl hover:text-[var(--hover-color)] transition-colors"
            >
              <MdMail style={{ color: accentColor }} className="text-2xl" />
              <span className="underline">{email}</span>
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-4 text-xl hover:text-[var(--hover-color)] transition-colors"
            >
              <MdLocalPhone
                style={{ color: accentColor }}
                className="text-2xl"
              />
              <span>{phoneNumber}</span>
            </a>
            <div className="flex items-center gap-4 mt-10 text-xl">
              <MdLocationOn
                style={{ color: accentColor }}
                className="text-2xl"
              />
              <p>{location}</p>
            </div>
          </div>

          {/* github and linkedin */}
          <div className="flex flex-col gap-4">
            <a
              href={githubURL}
              className="flex items-center gap-4 text-xl hover:text-[var(--hover-color)] transition-colors"
            >
              <FaGithub style={{ color: accentColor }} className="text-2xl" />
              <span>GitHub</span>
            </a>
            <a
              href={linkedInURL}
              className="flex items-center gap-4 text-xl hover:text-[var(--hover-color)] transition-colors"
            >
              <FaLinkedin style={{ color: accentColor }} className="text-2xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      {/* bottom line */}
      <div
        className="mx-auto border-b-2"
        style={{ width: headerWidth, borderColor: accentColor }}
      />
      <p className="text-center mt-[180px] tracking-normal">
        Forged with love, sweat & creativity by {author}
      </p>
    </div>
  );
};

export default Footer;
