const Thinking = () => {
  return (
    <div className="wrapper py-20 bg-vividPink">
      <div className="contain flex-col justify-center items-center gap-8">
        <h2 className="font-anton sm:mb-5 font-normal text-delayedYellow text-[30px] sm:text-[40px] lg:text-[60px] text-center">
          Thinking of starting anew in the EU?
        </h2>
        <div className="grid w-full max-w-[978px] grid-cols-1  lg:grid-cols-2 gap-5 lg:gap-10">
          <p className="text-lg sm:text-xl font-normal text-white sm:text-left text-center">
            <span className="text-delayedYellow">
              Silk Route is here to help.
            </span>{" "}
            We’re confident in saying we’re one of the best residency programs
            in Europe, and here’s why. We create companies tailored to each
            individual in our care–businesses that establish residency in the
            European Union and ensure long term success. But the genius of our
            business model is that we make this process a luxury experience for
            you{" "}
            <span className="text-delayedYellow">
              (full details available on our services page).
            </span>
          </p>
          <div className="w-full flex justify-center items-center">
            <img
              src="/arrow_1.png"
              className="max-w-[346px] w-full object-contain"
              alt=""
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src="/arrow_2.png"
              className="max-w-[346px] w-full object-contain"
              alt=""
            />
          </div>
          <p className="text-lg sm:text-xl font-normal text-white sm:text-left text-center">
            Our team of experts know the immigration process inside and out.
            Their objective is to take the fear out of the unknown because let’s
            be honest; uprooting your life to start over in a new country is
            daunting to say the least. Trusting Silk Route eliminates the
            anxiety, confusion, and uncertainty of immigration so all that’s
            left for you to think about is the excitement of new beginnings.
          </p>
        </div>
        <h3 className="font-anton text-xl sm:text-[28px] text-center lg:text-[32px] font-normal text-delayedYellow">
          Are you ready to unlock the possibilities of a new life in the EU?
        </h3>
        <a
          href="#"
          className="underline text-springGreen text-lg sm:text-2xl font-bold"
        >
          Click here to begin your journey
        </a>
      </div>
    </div>
  );
};

export default Thinking;
