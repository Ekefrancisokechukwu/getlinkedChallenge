import { NavLink } from "react-router-dom";
import Countdown from "./Countdown";

// IMPORT IMAGES ///
import heroman from "../assets/images/hero_man.png";
import vector from "../assets/images/heroblink.png";
import spark from "../assets/images/spark.png";

import chain from "../assets/images/chain.png";
import lightbulb from "../assets/images/lightbulb.png";
import glow1 from "../assets/images/hero lens.png";
import glow2 from "../assets/images/hero lens2.png";
import Typewriter from "typewriter-effect";
import StarAnimation from "./StarAnimation";

const Hero = () => {
  return (
    <section className="bg-main border-b-style relative overflow-x-clip   z-10 ">
      <StarAnimation />
      <div className="absolute -z-10 sm:left-3 -left-[7rem] blur-md	 -top-[2rem] sm:w-[50rem] w-[396px]">
        <img src={glow1} alt="lens glow" />
      </div>

      <div className="absolute lg:w-[50rem]  top-[2rem]  lg:block hidden right-0">
        <img src={glow2} alt="lens glow" />
      </div>

      <div className="py-5 relative  sm:px-14 px-10">
        <h1
          className="italic  relative lg:text-[36px]   md:text-[25px]  
          text-[16px] sm:w-auto mb:text-center text-right font-bold "
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(" Igniting a Revolution in HR Innovation")
                .start()
                .pauseFor(300);
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <span className=" absolute mb:right-28 right-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="17"
            viewBox="0 0 255 17"
            fill="none"
            className="md:w-[253px] w-[115px]"
          >
            <path
              d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
              stroke="#FF26B9 "
              strokeWidth="5"
            />
          </svg>
        </span>
      </div>

      <div className=" md:bg-hero-pattern  bg-right bg-no-repeat  grid lg:grid-cols-2 grid-cols-1 layout-center items-center mt-3">
        <div className="lg:pl-16  px-10 sm:text-start text-center">
          <div className=" xl:w-[722px] lg:w-[690px] relative ">
            <h1 className="leading-snug hero-head xl:text-[80px] sm:text-[72px] text-[55px] relative mb:text-[32px]   font-bold">
              getlinked{" "}
              <span className="relative">
                Tech{" "}
                <img
                  src={lightbulb}
                  alt="spark vector"
                  className="absolute tablet:-top-[4rem] top-[-1rem] right-10 xl:w-auto w-[30px] :top-5"
                />
              </span>
              <span className="flex items-center mb:justify-center gap-3">
                Hackathon <span className="text-pink">1.0</span>
                <img
                  src={chain}
                  alt="chain vector"
                  className="xl:w-[60px] xl:h-[60px] w-[30px] h-[30px] "
                />
                <img
                  src={spark}
                  alt="spark vector"
                  className="xl:w-[58px] xl:h-[58px] w-[22.119px] h-[22.119px]"
                />
              </span>
            </h1>
          </div>

          <p className="text-[20px] mb:text-[13px] mt-2 md:w-[530px] leading-[166%]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <NavLink
            to="/register"
            className="btn-primary mt-[41px] sm:mx-0 mx-auto"
          >
            register
          </NavLink>

          <div className="xl:mt-[77px] mt-[55px] ">
            <Countdown />
          </div>
        </div>

        <div className="relative  justify-self-center">
          <div className="lg:w-auto sm:w-[30rem] w-auto">
            <img
              src={heroman}
              alt="hero man"
              className="w-full h-full object-cover"
            />
          </div>

          <img
            src={vector}
            alt="vector"
            className="absolute -top-4 left-1/2 lg:w-[40rem] sm:w-[20rem] w-[20rem] -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
