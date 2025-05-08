import { useState, useContext } from 'react';
import { FormContext } from '../providers/FormContext';
import { GoPlus } from "react-icons/go";  // plus icon
import { HiOutlineMinus } from "react-icons/hi2"; // minus icon

const Footer = () => {
  const { firstName, lastName, school } = useContext(FormContext);
  const [isOpen, setIsOpen] = useState(true); // Initially open

  const toggleFooter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black text-white text-xl mx-10 my-10">
      {/* Header with toggle button */}
      <div className="flex justify-between items-center">
        <h1>NAMN EFTERNAMN</h1>
        <button onClick={toggleFooter} className="text-white text-2xl">
          {isOpen ? <HiOutlineMinus /> : <GoPlus />}
        </button>
      </div>

      {/* Content that shows/hides based on isOpen */}
      {isOpen && (
        <div className="mt-4">
          <h2>{firstName}</h2>
          <h2>{lastName}</h2>
          <h2>{school}</h2>
        </div>
      )}
    </div>
  );
};

export default Footer;