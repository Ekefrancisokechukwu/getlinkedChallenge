const TARGET_TIME = new Date(2023, 9, 27, 10, 10, 0);

export const getTimeLeft = () => {
  const totalTimeLeft = TARGET_TIME - new Date();
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return {
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  };
};

// animation contorl 

export const textAnimation = {
  from: { opacity: 0, y: "30%" },
  to: { opacity: 1, y: 0, transition: { stiffness: 30 ,ease:"easeIn"} },
};


// group size options 

export const generatedAmountOption = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
