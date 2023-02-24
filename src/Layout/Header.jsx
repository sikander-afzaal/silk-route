import { useEffect, useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  useEffect(() => {
    const headerColor = () => {
      if (window.scrollY > 120) {
        setBgColor(true);
      } else {
        setBgColor(false);
      }
    };
    window.addEventListener("scroll", headerColor);

    return () => {
      window.removeEventListener("scroll", headerColor);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed ${
          bgColor ? "bg-black" : "bg-transparent"
        } transition-all duration-500 z-[60] top-0 left-0 wrapper`}
      >
        {headerToggle && (
          <div
            onClick={() => setHeaderToggle(false)}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-[88] md:hidden block"
          ></div>
        )}
        <header className="contain justify-between items-center h-[110px]">
          <img
            src="/logo.png"
            className="object-contain w-[140px] md:w-[150px]"
            alt=""
          />
          <nav
            className={`flex flex-col md:flex-row z-[90] top-0 w-full md:w-auto max-w-[450px] md:max-w-none h-full md:h-auto justify-start items-center sm:items-start md:items-center gap-8 lg:gap-[56px] md:static fixed ${
              headerToggle ? "right-0" : "-right-[800px] "
            } md:bg-transparent bg-black pt-[90px] px-[2rem] md:p-0 md:border-none border-l border-solid border-delayedYellow transition-all duration-1000 `}
          >
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-[22px] text-delayedYellow font-bold"
            >
              Home
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-[22px] text-white font-normal"
            >
              About
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-[22px] text-white font-normal"
            >
              Services
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-[22px] text-white font-normal"
            >
              Blogs
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-[22px] text-white font-normal"
            >
              FAQ
            </a>
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-[22px] text-white font-normal"
            >
              Contact
            </a>
          </nav>
          {headerToggle ? (
            <svg
              onClick={() => setHeaderToggle(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 relative z-[91] cursor-pointer md:hidden block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setHeaderToggle(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 relative z-[91] cursor-pointer md:hidden block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </header>
      </div>
    </>
  );
};

export default Header;
