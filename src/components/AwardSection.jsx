import { motion } from "framer-motion";

// IMAGES
import trophy from "../assets/images/trophy.png";
import bronze from "../assets/images/bronze.png";
import gold from "../assets/images/gold.png";
import silver from "../assets/images/silver.png";
import glow1 from "../assets/images/award 1.png";
import glow2 from "../assets/images/award 2.png";
import star1 from "../assets/images/sata gra.png";
import star2 from "../assets/images/star pu.png";
import star3 from "../assets/images/starlight.png";
import star4 from "../assets/images/star.png";
import star5 from "../assets/images/star1.png";

const AwardSection = () => {
  return (
    <section
      className="bg-main z-20 overflow-x-clip relative border-b-style py-16 
      xl:px-24 sm:px-14 px-6"
    >
      <div className="absolute blur-sm -z-10 w-[40rem]">
        <img src={glow1} alt="glow lens" />
      </div>
      <div className="absolute -z-10 lg:w-[16rem] w-[252px] right-[0]  -bottom-[15rem]">
        <img src={glow2} alt="glow lens" />
      </div>

      <div className="layout-center flex-col relative   items-center gap-5 gap-y-16  justify-between flex xl:flex-row">
        <div className="relative">
          <img
            src={star1}
            alt="star"
            className="star sm:-top-[8rem] top-0  left-[18rem]"
          />
          <img
            src={star5}
            alt="star"
            className="star lg:-bottom-[7rem] bottom-0 md:left-[15rem] left-[7rem]"
          />
          <img src={trophy} alt="trophy vector" />
        </div>

        <div className="relative">
          <img
            src={star4}
            alt="star"
            className="star top-[14rem] left-[3rem]"
          />
          <img
            src={star4}
            alt="star"
            className="star top-[23rem] -right-[1rem]"
          />
          <img
            src={star3}
            alt="star"
            className="star md-bottom-[3rem] sm:-bottom-[4rem] -bottom-[2rem] left-1/2"
          />

          <div className="sm:w-[401px] xl:pl-[10rem]">
            <h1 className="primary-heading">
              Prizes and
              <span>Rewards</span>
            </h1>
            <p>
              Higlight of thr prizes or rewards for winners and for participants
            </p>
          </div>

          <div className="grid grid-cols-3  items-center xl:gap-12 sm:gap-[2rem] gap-2 mt-[18rem]">
            <div className="award-card">
              <div className="award-tag">
                <img
                  src={silver}
                  alt="silver medal"
                  className=" mx-auto -mt-[7rem]"
                />
              </div>

              <div className="md:mt-[8rem] mb-4 sm:mt-[6rem] mt-[3rem] ms:mt-[2rem]">
                <h1 className="lg:text-[32px] sm:text-[25px] text-[14px] font-bold mt-3">
                  2nd
                </h1>
                <h3 className="lg:text-[24px] sm:text-[19px] text-[12px] font-semibold">
                  Runner
                </h3>
                <h2 className="lg:text-[32px] sm:text-[25px] text-[14px] font-bold text-pink ">
                  N300,000
                </h2>
              </div>
            </div>

            <div className="award-card relative  bg-[#903aff1e] z-10   border-[#903AFF] ">
              <div className="lg:w-[296px] sm:w-[220px] w-[125.671px]  absolute left-1/2 -translate-x-1/2 sm:-top-[10rem] top-[-6rem]">
                <img src={gold} alt="gold medal" className=" mx-auto  " />
              </div>
              <div className="md:mt-[11rem] sm:mt-[6rem] mt-[4rem] ms:mt-[3rem]">
                <h1 className="lg:text-[40px] sm:text-[25px] text-[14px] font-bold ">
                  1st
                </h1>
                <h3 className="lg:text-[24px]  sm:text-[19px] text-[12px] font-semibold">
                  Runner
                </h3>
                <h2 className="lg:text-[32px] sm:text-[25px] text-[14px] font-bold text-[#903AFF] mt-3 ms:mt-2">
                  N400,000
                </h2>
              </div>
            </div>

            <div className="award-card">
              <div className="award-tag">
                <img
                  src={bronze}
                  alt="silver medal"
                  className=" mx-auto -mt-[7rem]"
                />
              </div>

              <div className="md:mt-[8rem] mb-4 sm:mt-[6rem] mt-[3rem] ms:mt-[2rem]">
                <h1 className="lg:text-[32px] sm:text-[25px] text-[14px]  font-bold mt-3">
                  3rd
                </h1>
                <h3 className="lg:text-[24px]  sm:text-[19px] text-[12px] font-semibold">
                  Runner
                </h3>
                <h2 className="lg:text-[32px] sm:text-[25px] text-[14px] font-bold text-pink ">
                  N150,000
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AwardSection;
