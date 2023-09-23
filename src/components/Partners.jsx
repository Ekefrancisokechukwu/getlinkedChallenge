import { partners } from "../../utils/data";
import lens1 from "../assets/images/glow1.png";
import lens2 from "../assets/images/part1.png";

import star1 from "../assets/images/sata gra.png";
import star3 from "../assets/images/star1.png";
import star2 from "../assets/images/star pu.png";

const Partners = () => {
  return (
    <section className="bg-main py-14 relative z-20 lg:px-20 px-8 border-b-style overflow-x-clip">
      <img
        src={star1}
        alt="star"
        className="star top-[20rem] left-[45rem] right-0"
      />
      <img src={star2} alt="star" className="star top-[13rem] left-[8rem]" />
      <img
        src={star3}
        alt="star"
        className="star bottom-[15rem] left-[45rem] right-0"
      />

      <div className="absolute -z-10 lg:top-[-6rem] top-8 lg:w-[40rem] w-[286px] -left-[2rem]">
        <img src={lens1} alt="glow lens" />
      </div>
      <div className="absolute blur -z-10 top-[25rem] lg:w-[25rem] w-[220px] -right-[4rem]">
        <img src={lens2} alt="glow lens" />
      </div>
      <div className="sm:w-[452px] text-center mx-auto">
        <h1 className="primary-heading">Partners and Sponsors</h1>
        <p className="sm:leading-[27.5px] leading-[20px] mt-3">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>

      <div
        className=" max-w-[1100px] border border-pink md:py-16 py-9 md:px-10 px-5 rounded w-full  mt-24 mx-auto grid
       grid-cols-[repeat(3,1fr)]  justify-center xl:flex-wrap
          gap-y-8 "
      >
        {partners.map((paterner, index) => (
          <div
            key={index}
            className=" partner relative grid px-3 py-8  place-items-center"
          >
            <img src={paterner} alt={paterner} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Partners;
