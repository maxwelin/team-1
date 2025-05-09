import { useState, useRef, useEffect } from 'react';
import { useContext } from 'react';
import { FormContext } from '../providers/FormContext';
import { GoPlus } from "react-icons/go";  // plus icon
import { HiOutlineMinus } from "react-icons/hi2"; // minus icon

const Footer = () => {
  const { firstName, lastName, school } = useContext(FormContext);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleFooter = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="bg-black text-white text-xl mx-10 my-10">
      <h1 className="text-7xl text-center mb-6">Let's Connect</h1>

      {/* upper line */}
      <div className="w-full mx-auto border-b-1 border-[#FF58C7]" />

      {/* clickable area */}
      <div
        className="flex justify-between items-center cursor-pointer py-2"
        onClick={toggleFooter}
      >
        {/* always show firstName and lastName */}
        <h2 className="text-xl text-[#FF58C7]">{firstName} {lastName}</h2>
        {isOpen ? (
          <HiOutlineMinus className="text-2xl text-[#FF58C7]" />
        ) : (
          <GoPlus className="text-2xl text-[#FF58C7]" />
        )}
      </div>

      {/* animated section */}
      <div
        style={{
          maxHeight: isOpen ? `${height + 16}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="mt-4 flex justify-left">
          <h2 className="text-xl">{school}</h2>
        </div>
      </div>

      {/* bottom line */}
      <div className="w-full mx-auto border-b-1 border-[#FF58C7]" />
    </div>
  );
};

export default Footer;