import congrate from "../assets/images/congratulation.png";
import wink from "../assets/images/wink.png";

const RegisterSucces = ({ isSubmited, setIsSubmited }) => {
  return (
    <div
      className={`fixed z-[70] overflow-y-scroll w-full grid place-items-center
      transition-transform duration-300
       h-screen bg-[#150e28ed] px-10 top-0 left-0 ${
         isSubmited ? "scale-100 opacity-100" : "scale-0 opacity-0"
       }`}
    >
      <div className="border grid place-items-center text-center xl:w-[699px] border-pink rounded-md px-16 py-9 mb:px-7">
        <div className="">
          <img src={congrate} alt="congratulation vector" />
        </div>
        <h2 className="mb:text-[16px]">
          Congratulations you have successfully Registered!
        </h2>
        <div className="mt-3 flex justify-center items-center">
          <p className="sm:w-[250px] mb:text-[12px] ">
            Yes, it was easy and you did it! check your mail box for next step
          </p>
          <img
            src={wink}
            alt="wink emoji"
            className="justify-self-end align-baseline"
          />
        </div>
        <button
          onClick={() => setIsSubmited(false)}
          className="btn-primary w-full mt-3 block"
        >
          back
        </button>
      </div>
    </div>
  );
};
export default RegisterSucces;
