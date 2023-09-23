import img1 from "../assets/images/big idea.png";
import img2 from "../assets/images/arrow.png";
import star1 from "../assets/images/sata gra.png";
import star2 from "../assets/images/star pu.png";
import { motion } from "framer-motion";


const IntroSection = () => {
  return (
    <section
      className="bg-main  relative border-b-style  
       py-12 xl:px-36 sm:px-24 px-6"
    >
      <div className="layout-center grid gap-16 items-center lg:grid-cols-2 grid-cols-1">
        <div className="relative lg:place-self-auto place-self-center ">
          <img src={img1} alt="vector image" />
          <img
            src={img2}
            alt="arrow pic"
            className="absolute -bottom-4 -right-3"
          />
          <img
            src={star1}
            alt="star vector"
            className="absolute md:w-[21px] md:h-[25px] w-[11px] h-[13px] sm:-left-[4rem] left-2 sm:top-[11rem] top-[7rem]"
          />
        </div>

        <div className="sm:text-start text-center relative">
           <motion.h1
            initial={{ y: "30%" }}
            whileInView={{ y: 0 }}
            transition={{ stiffness: 30 }}
            className="primary-heading background-star"
          >
            Introduction to getlinked <span>tech Hackathon 1.0</span>
          </motion.h1>
          <img
            src={star2}
            alt="star vector"
            className="absolute md:w-[30px]  md:h-[36px] w-[11px] h-[13px] top-[1.5rem] md:right-[-1rem]   right-2"
          />
          <motion.p
            initial={{ y: "30%" }}
            whileInView={{ y: 0 }}
            transition={{ stiffness: 30 }}
            className="mobile_lg:text-[14px] mt-2 leading-[27.5px]"
          >
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </motion.p>
        </div>
      </div>
    </section>
  );
};
export default IntroSection;
