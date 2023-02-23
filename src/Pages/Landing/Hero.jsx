import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [color, setColor] = useState("#39FF14");
  const [slideIndex, setslideIndex] = useState(1);
  useEffect(() => {
    const paginations = document.querySelectorAll(".splide__pagination__page");
    const activePagination = document.querySelector(
      ".splide__pagination__page.is-active"
    );
    paginations.forEach((elem) => {
      elem.style.borderColor = "transparent";
      elem.style.backgroundColor = "transparent";
    });
    switch (slideIndex) {
      case 1:
        setColor("#39FF14");
        paginations.forEach((elem) => {
          elem.style.borderColor = "#39FF14";
        });
        activePagination.style.backgroundColor = "#39FF14";
        break;
      case 2:
        setColor("#FF0F7A");
        paginations.forEach((elem) => {
          elem.style.borderColor = "#FF0F7A";
        });
        activePagination.style.backgroundColor = "#FF0F7A";
        break;
      case 3:
        setColor("#FCFE00");
        paginations.forEach((elem) => {
          elem.style.borderColor = "#FCFE00";
        });
        activePagination.style.backgroundColor = "#FCFE00";
        break;
      case 4:
        setColor("#5501EE");
        paginations.forEach((elem) => {
          elem.style.borderColor = "#5501EE";
        });
        activePagination.style.backgroundColor = "#5501EE";
        break;

      default:
        break;
    }
  }, [slideIndex]);

  return (
    <div className="wrapper min-h-[700px] h-screen">
      <Splide
        options={{
          autoplay: true,
          fixedHeight: "100vh",
          width: "100%",
          fixedWidth: "100vw",
          perPage: 1,
          perMove: 1,
          drag: true,
          pagination: true,
          arrows: true,
          type: "loop",
        }}
        hasTrack={false}
        aria-label="..."
        onMove={(splide, newIndex, prevIndex, destIndex) => {
          console.log(destIndex);
          setslideIndex(newIndex + 1);
        }}
      >
        <SplideTrack>
          <SplideSlide>
            {" "}
            <div className="w-full relative h-full">
              <img
                src="/slide1.png"
                className="w-full object-cover h-full"
                alt=""
              />
              <div className="contain justify-center sm:justify-start absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
                <p className="font-anton drop-shadow-text text-[40px] text-center sm:text-left sm:text-[80px] font-normal text-white">
                  Immigration <br className="sm:block hidden" />
                  Tailored <br className="sm:block hidden" />
                  to You
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className="w-full relative h-full">
              <img
                src="/slide2.png"
                className="w-full object-cover h-full"
                alt=""
              />
              <div className="contain justify-center sm:justify-end absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
                <div className="font-anton  text-[40px] text-center sm:text-left sm:text-[80px] font-normal text-white">
                  <p className="leading-[1.2] drop-shadow-text">
                    Immigrating <br className="sm:block hidden" /> is a{" "}
                  </p>
                  <p className="flex justify-center sm:justify-start items-center gap-3 leading-[1] drop-shadow-text">
                    <span className="relative leading-[1.2]">
                      scary{" "}
                      <img
                        src="/cross.png"
                        className="absolute w-full h-full top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
                        alt=""
                      />
                    </span>
                    <span className="text-vividPink">luxury</span>
                  </p>{" "}
                  <p className="leading-[1.2] drop-shadow-text">experience</p>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className="w-full relative h-full">
              <img
                src="/slide3.png"
                className="w-full object-cover h-full"
                alt=""
              />
              <div className="contain justify-center  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
                <p className="font-anton drop-shadow-text text-[40px] text-center sm:text-[80px] font-normal text-white">
                  We specialize in new beginnings
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className="w-full relative h-full">
              <img
                src="/slide4.png"
                className="w-full object-cover h-full"
                alt=""
              />
              <div className="contain justify-center sm:justify-start absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
                <p className="font-anton drop-shadow-text text-[40px] text-center sm:text-left sm:text-[80px] font-normal text-white">
                  A Red Carpet Experience for <br className="sm:block hidden" />{" "}
                  Anyone Seeking <br className="sm:block hidden" />
                  Residence in Europe
                </p>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>
        <div className="splide__arrows absolute bottom-[7%] left-1/2 -translate-x-1/2 max-w-[1100px] flex justify-between items-center w-[90%]">
          <button className="rotate-180 splide__arrow--prev max-w-[44px] object-contain opacity-100 static bg-transparent">
            <svg
              className="w-[35px] sm:w-[44px] h-[25px] sm:h-[34px] "
              viewBox="0 0 44 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-500"
                d="M10.2466 16.7534L35.5617 30.4773L35.5617 3.02958L10.2466 16.7534Z"
                fill={color}
              />
              <path
                className="transition-all duration-500"
                d="M24.7124 3.55162L1.22993 16.7534L24.7124 29.9552L24.7124 3.55162Z"
                stroke={color}
                strokeWidth="1.20548"
              />
            </svg>
          </button>
          <ul className="splide__pagination flex justify-center items-center w-max static gap-3 sm:gap-6"></ul>
          <button className=" splide__arrow--next max-w-[44px] object-contain opacity-100 static bg-transparent">
            {" "}
            <svg
              className="h-[25px] sm:w-[44px] w-[35px] sm:h-[34px] "
              viewBox="0 0 44 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all duration-500"
                d="M19.2877 3.55162L42.7701 16.7534L19.2877 29.9552L19.2877 3.55162Z"
                stroke={color}
                strokeWidth="1.20548"
              />
              <path
                className="transition-all duration-500"
                d="M33.7534 16.7534L8.43836 30.4773L8.43836 3.02958L33.7534 16.7534Z"
                fill={color}
              />
            </svg>
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default Hero;
