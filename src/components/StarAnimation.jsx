import { motion } from "framer-motion";
import star1 from "../assets/images/star.png";
import star2 from "../assets/images/starlight.png";

const starAnimate = {
  scale: {
    scale: [1, 0, 1],
    transition: { repeat: Infinity, repeatType: "loop" },
  },
};
const StarAnimation = () => {
  return (
    <>
      <motion.img
        animate={"scale"}
        variants={starAnimate}
        src={star1}
        alt="star"
        className="star left-[7rem]   top-[3rem]"
      />
      <motion.img
        animate={"scale"}
        variants={starAnimate}
        src={star2}
        alt="star"
        className="star md:left-[55%] right-[2rem]  md:top-[8rem] top-[3rem]"
      />
      <motion.img
        animate={"scale"}
        variants={starAnimate}
        src={star2}
        alt="star"
        className="star z-10 lg:left-[35%]  right-[30%] mb:right-20  lg:bottom-[10rem] md:bottom-[37rem] mb:top-[18rem]"
      />
    </>
  );
};
export default StarAnimation;
