import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";

const SingleAccordion = ({ question, answer }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleAccordion = () => {
    const toggle = !isOpen;
    setisOpen(toggle);
  };

  return (
    <article className="border-b border-pink">
      <div
        className="py-2 cursor-pointer flex justify-between gap-x-4 items-center "
        onClick={toggleAccordion}
      >
        <h2 className="py-3 mb:text-[12px]">{question}</h2>
        <motion.button
          animate={isOpen ? { rotate: "45deg" } : { rotate: 0 }}
          className="text-pink text-[20px]"
        >
          <BiPlus />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ delay: 0.5, stiffness: 39 }}
            className="overflow-clip"
          >
            <p className="pb-1">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
export default SingleAccordion;
