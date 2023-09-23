import Accordion from "./Accordion";
import {motion} from "framer-motion"
import { textAnimation } from "../../utils/helper";


// IMAGES
import img1 from "../assets/images/thought.png";
import vector1 from "../assets/images/questionmark.png";
import vector2 from "../assets/images/_1.png";
import star1 from "../assets/images/sata gra.png";
import star2 from "../assets/images/star pu.png";
import star3 from "../assets/images/starlight.png";
import star4 from "../assets/images/star.png";

const FaqsSection = () => {
  return (
    <section
      id="faqs"
      className="bg-[#150E28] scroll-mt-7  xl:px-24 sm:px-24 px-6 py-20 border-b-style  "
    >
      <img
        src={star2}
        alt="star image"
        className="star lg:block hidden left-[4rem]"
      />
      <div className="max-w-[1200px] gap-16 grid lg:grid-cols-2 grid-cols-1 mx-auto  items-center">
        <div>
          <div className="sm:text-start relative text-center">
            <motion.h1  variants={textAnimation}
            initial="from"
            whileInView="to" className="primary-heading">
              Frequently Ask <span>Question</span>
            </motion.h1>

            <motion.p  variants={textAnimation}
            initial="from"
            whileInView="to" className="mt-[16px]">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </motion.p>
          </div>

          <Accordion />
        </div>

        <div className="relative">
          <img
            src={star1}
            alt="star image"
            className="star sm:left-[18rem] left-[17rem] mb:left-[10rem] top-14"
          />
          <img
            src={star1}
            alt="star image"
            className="star sm:top-[13rem] mb:top-[9rem] top-[10rem] lg:left-[6rem]  left-[7rem] mb:left-[3rem]"
          />
          <img
            src={star3}
            alt="star image"
            className="star sm:top-[24rem] top-[20rem] mb:left-4 mb:top-[18rem]  sm:left-0 left-12"
          />
          <img
            src={star4}
            alt="star image"
            className="star -bottom-9 right-[6rem]"
          />
          <div
            className="absolute lg:left-[2rem]  mobile_lg:left-[5rem] left-[3rem]
          flex xl:gap-[6rem] lg:gap-[3rem] mobile_lg:gap-[5rem]
            gap-11 justify-stretch items-center"
          >
            <img
              src={vector2}
              alt="vector"
              className="-mb-[6rem] xl:w-auto w-[30px]"
            />
            <img src={vector1} alt="vector" className="xl:w-auto w-[40px]" />
            <img
              src={vector2}
              alt="vector"
              className="-mb-[6rem] xl:w-auto w-[30px]"
            />
          </div>
          <img src={img1} alt="vector img" className="mt-24" />
        </div>
      </div>
      `
    </section>
  );
};
export default FaqsSection;
