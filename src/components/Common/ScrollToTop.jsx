import { useEffect, useState } from "react";

import { FiArrowUpCircle } from "react-icons/fi";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer hidden lg:flex fixed bottom-20 right-14 w-10 h-10 text-white rounded-full items-center justify-center shadow-lg hover:text-[#FF58C7] hover:scale-110 transition-all duration-300"
        >
          <FiArrowUpCircle className="w-10 h-10" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
