import { accordions } from "../../utils/data";
import SingleAccordion from "./SingleAccordion";

const Accordion = () => {
  return (
    <div className="mt-[68px] grid gap-y-4">
      {accordions.map((accordion, index) => {
        return <SingleAccordion key={index} {...accordion} />;
      })}
    </div>
  );
};
export default Accordion;
