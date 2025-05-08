import { useState, useContext } from 'react';
import { FormContext } from '../providers/FormContext';
import { GoPlus } from "react-icons/go";  // plus icon
import { HiOutlineMinus } from "react-icons/hi2"; // minus icon

const Footer = () => {
  const { firstName, lastName, school } = useContext(FormContext);
  const [isOpen, setIsOpen] = useState(true); // initially open

  const toggleFooter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white text-xl mx-10 my-10">
      <h1 className="text-7xl text-center mb-6">Let's Connect</h1>
      <div className="w-full mx-auto border-b-1 border-[#FF58C7]" />
      <div className="flex justify-between items-center mt-4">
        {isOpen && (
          <h2 className="text-xl text-[#FF58C7]">{firstName} {lastName}</h2>
        )}
        <button onClick={toggleFooter} className="text-2xl text-[#FF58C7]">
          {isOpen ? <HiOutlineMinus /> : <GoPlus />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4">
          <h2 className="text-xl">{school}</h2>
        </div>
      )}
    </div>
  );
};

export default Footer;