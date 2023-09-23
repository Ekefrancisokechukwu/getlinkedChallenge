import { useState, useEffect } from "react";
import { getTimeLeft } from "../../utils/helper";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="font-[400] flex items-center sm:justify-start justify-center gap-8">
      <h4>
        <span className="countdown ">{timeLeft.hours}</span>
        <span className="text-[14px]">H</span>
      </h4>
      <h4>
        <span className="countdown">{timeLeft.minutes}</span>
        <span className="text-[14px]">M</span>
      </h4>
      <h4>
        <span className="countdown">{timeLeft.seconds}</span>
        <span className="text-[14px]">S</span>
      </h4>
    </div>
  );
};
export default Countdown;
