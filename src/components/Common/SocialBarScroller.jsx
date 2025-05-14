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
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    toggleForm,
    email,
    githubURL,
    linkedInURL,
    cvFile,
    cvFileName,
    fontColor,
    accentColor,
  } = useContext(FormContext);

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
    <div className="fixed top-1/3 left-8 z-50 hidden md:flex flex-col gap-4">
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <span
                style={{
                  color: hoveredIndex === index ? accentColor : fontColor,
                  transform:
                    hoveredIndex === index ? "scale(1.25)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              >
                {item.icon}
              </span>
              <span
                className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-800 text-base whitespace-nowrap"
                style={{
                  color: hoveredIndex === index ? accentColor : fontColor,
                }}
              >
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
                style={{
                  color:
                    copiedIndex === index
                      ? "#00FF1E"
                      : hoveredIndex === index
                      ? accentColor
                      : fontColor,
                  transform:
                    hoveredIndex === index || copiedIndex === index
                      ? "scale(1.25)"
                      : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              >
                {hoveredIndex === index || copiedIndex === index
                  ? item.hoverIcon
                  : item.icon}
              </span>
              <span
                className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-800 text-base whitespace-nowrap"
                style={{
                  color:
                    copiedIndex === index
                      ? "#00FF1E"
                      : hoveredIndex === index
                      ? accentColor
                      : fontColor,
                }}
              >
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
