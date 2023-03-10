const Footer = () => {
  return (
    <footer className="wrapper bg-black pb-5 pt-8 lg:pt-16">
      <div className="contain flex-col justify-center items-center gap-5">
        <div className="flex justify-between lg:flex-row flex-col relative items-center lg:gap-2  md:gap-5 gap-8 w-full">
          <img
            src="/logo.png"
            className="w-[140px] lg:absolute left-0 top-1/2 lg:-translate-y-1/2 object-contain"
            alt=""
          />
          <div className="flex justify-center w-full items-center gap-4 md:gap-8 md:flex-row flex-col">
            <a href="#" className="text-white text-base">
              Home
            </a>
            <a href="#" className="text-white text-base">
              About Us
            </a>
            <a href="#" className="text-white text-base">
              Services
            </a>
            <a href="#" className="text-white text-base">
              Blogs
            </a>
            <a href="#" className="text-white text-base">
              FAQ
            </a>
            <a href="#" className="text-white text-base">
              Contact
            </a>
            <a href="#" className="text-white text-base">
              Terms and Conditions
            </a>
            <a href="#" className="text-white text-base">
              Privacy Policy
            </a>
          </div>
        </div>
        <p className="text-white text-sm">
          Silk Route. All rights reserved © 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
