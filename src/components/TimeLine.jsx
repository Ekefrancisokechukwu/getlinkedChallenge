import { timelines } from "../../utils/data";
import SingleTimeline from "./SingleTimeline";

const TimeLine = () => {
  return (
    <div className="timeline relative max-w-[1100px]   grid  gap-y-1 mx-auto">
      {timelines.map((timeline, index) => {
        return <SingleTimeline key={index} {...timeline} index={index} />;
      })}
    </div>
  );
};
export default TimeLine;
