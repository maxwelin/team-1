import { useContext, useEffect } from "react";
import { FormContext } from "../providers/FormContext";

import { useState } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoCopySharp } from "react-icons/io5";

const SocialBar = () => {
  const [showButton, setShowButton] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { toggleForm, email, githubURL, linkedInURL, cvFile, cvFileName } =
    useContext(FormContext);

  if (toggleForm || !showButton) return null;

  const socials = [
    {
      icon: <MdEmail size={24} />,
      hoverIcon: <IoCopySharp size={24} className="rotate-90" />,
      text: "Copy my email",
      isCopy: true,
    },
    {
      icon: <FaGithub size={24} />,
      text: "Visit my GitHub",
      href: githubURL,
    },
    {
      icon: <FaLinkedin size={24} />,
      text: "Connect on LinkedIn",
      href: linkedInURL,
    },
    {
      icon: <PiReadCvLogoFill size={26} />,
      text: "Download my CV",
      href: cvFile ? URL.createObjectURL(cvFile) : "#",
      download: cvFileName || "my-cv.pdf",
    },
  ];

  return (
    <div className="fixed top-1/3 left-0 z-50 hidden md:flex flex-col gap-4">
      {socials.map((item, index) => (
        <div key={index} className="group relative">
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              download={item.download}
              className={`flex items-center pl-2 pr-4 py-2 rounded-r-full transition-all duration-600 hover:translate-x-2 ${
                item.href === "#" ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              <span className="text-white group-hover:text-[#FF58C7] transition-transform duration-600 group-hover:scale-150">
                {item.icon}
              </span>
              <span className="ml-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-800 text-sm whitespace-nowrap">
                {item.text}
              </span>
            </a>
          ) : item.isCopy ? (
            <button
              onClick={() => {
                navigator.clipboard.writeText(email);
                setCopiedIndex(index);
                setTimeout(() => setCopiedIndex(null), 2000);
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex items-center pl-2 pr-4 py-2 rounded-r-full transition-all duration-800 hover:translate-x-2"
            >
              <span
                className={`whitespace-nowrap transition-all duration-300 group-hover:scale-125 ${
                  copiedIndex === index
                    ? "text-[#00FF1E] scale-105"
                    : "text-white group-hover:text-[#FF58C7]"
                }`}
              >
                {hoveredIndex === index || copiedIndex === index
                  ? item.hoverIcon
                  : item.icon}
              </span>
              <span className="ml-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-800 text-sm whitespace-nowrap">
                {copiedIndex === index ? email : item.text}
              </span>
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default SocialBar;
