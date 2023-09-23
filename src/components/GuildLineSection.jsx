import { motion } from "framer-motion";

import img1 from "../assets/images/guildline.png";
import star2 from "../assets/images/star.png";
import star1 from "../assets/images/starlight.png";
import lens1 from "../assets/images/txt.png";
import lens2 from "../assets/images/txtr.png";
import ellipse from "../assets/images/ellipse.png";

const GuildLineSection = () => {
  return (
    <section
      className="bg-main   relative z-20 border-b-style 
     py-6 xl:px-24 sm:px-24 px-6 overflow-x-clip gap-x-16 "
    >
      <div
        className="absolute -z-10 lg:w-[40rem] w-[404px] 
       lg:top-7 -top-4  blur xl:left-[10rem] -left-3"
      >
        <img src={lens1} alt="glow lens" />
      </div>
      <div className="absolute -z-10 lg:w-[16rem] w-[252px] right-[0]  -bottom-[15rem]">
        <img src={lens2} alt="glow lens" />
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 max-w-[1200px] mx-auto items-center">
        <div className="lg:order-1 order-2 sm:text-start relative text-center">
          <img
            src={star1}
            alt="star vector"
            className="absolute lg:left-[18rem] left-2 lg:-top-8 -top-[18rem]
             md:w-[26px] md:h-[32px] w-[10px] h-[12px]"
          />

          <img
            src={star2}
            alt="star vector"
            className="absolute sm:-right-8 right-0 lg:-bottom-9 -bottom-4
             md:w-[26px] md:h-[32px] w-[10px] h-[12px] "
          />

          <h1 className="primary-heading">
            Rules and
            <span>Guidelines</span>
          </h1>

          <p className="mt-2 leading-[27.5px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <div className="lg:order-2  z-10 order-1 relative">
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: "0" }}
            transition={{ when: "beforeChildren" }}
            className="absolute -z-10 xl:right-[7.5rem] xl:top-[5rem] lg:top-[3rem]
              lg:right-[4rem]  right-[6rem] top-[5rem]"
          >
            <img src={ellipse} alt="ellipse" className="max_tab:hidden" />
          </motion.div>

          <motion.img
            initial={{ y: "20rem", opacity: 0, visibility: "hidden" }}
            whileInView={{ y: "0rem", opacity: 1, visibility: "visible" }}
            transition={{ stiffness: 30 }}
            src={img1}
            alt="vector image"
          />
        </div>
      </div>
    </section>
  );
};
export default GuildLineSection;
