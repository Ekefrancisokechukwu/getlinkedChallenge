const TARGET_TIME = new Date(2023, 8, 26, 10, 10, 0);

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
  to: { opacity: 1, y: 0, transition: { stiffness: 30 } },
};
