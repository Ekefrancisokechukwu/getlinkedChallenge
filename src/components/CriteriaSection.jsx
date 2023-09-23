import { criterias } from "../../utils/data";
import { motion } from "framer-motion";

import img1 from "../assets/images/critaria.png";
import lens1 from "../assets/images/glow1.png";
import lens2 from "../assets/images/right lens.png";
import star1 from "../assets/images/star pu.png";
import star2 from "../assets/images/starlight.png";
import star3 from "../assets/images/star.png";
import ellipse from "../assets/images/ellipse.png";

const CriteriaSection = () => {
  return (
    <section className="bg-main z-10 relative py-[78px]  border-b-style  overflow-x-clip   xl:px-24 sm:px-24 px-6">
      {/* star images*/}
      <img
        src={star1}
        alt="star"
        className="absolute  md:left-[13rem] left:-[10rem] md:top-[5rem] top-[2rem] md:w-auto w-[13px]"
      />
      <img
        src={star2}
        alt="star"
        className="absolute left-[28rem] top-[27rem] md:w-auto w-[13px]"
      />
      <img
        src={star3}
        alt="star"
        className="absolute top-[88%]  sm:left-[40rem] right-8 md:w-auto w-[13px]"
      />

      {/* background glow effects */}
      <div className="absolute blur-md -z-10 lg:w-[40rem] w-[404px] md:top-[16rem] top-[5rem]  left-0">
        <img src={lens1} alt="lens glow" />
      </div>
      <div className="absolute -z-10 lg:w-[30rem] blur-md w-[252px] md:-bottom-[18rem] -bottom-[8rem] -right-5">
        <img src={lens2} alt="lens glow" />
      </div>

      <div className="layout-center grid lg:grid-cols-2 grid-cols-1 gap-x-16 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0" }}
            transition={{ when: "beforeChildren" }}
            className="absolute -z-10 left-[4rem] -top-[1rem] "
          >
            <motion.img
              src={ellipse}
              alt="vector image"
              className="max_tab:hidden"
            />
          </motion.div>
          <motion.img
            initial={{ y: "20rem", opacity: 0, visibility: "hidden" }}
            whileInView={{ y: "0rem", opacity: 1, visibility: "visible" }}
            transition={{ stiffness: 30 }}
            src={img1}
            alt="ellipse vector"
          />
        </div>
        <div className="sm:text-start relative text-center">
          <h1 className="primary-heading">
            Judging Criteria <span>Key attributes</span>
          </h1>

          <ul className="mt-[20px]">
            {criterias.map((criteria, index) => (
              <li key={index} className="mb-[22px]">
                <span className="text-pink text-[16px] capitalize">
                  {criteria.keyWord}
                </span>
                : <span className="text-[14px]">{criteria.paragraph}</span>
              </li>
            ))}
          </ul>

          <button className="btn-primary mt-[3rem] sm:mx-0 mx-auto">
            read more
          </button>
        </div>
      </div>
    </section>
  );
};
export default CriteriaSection;
