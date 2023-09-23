import { Link } from "react-router-dom";
import key from "../assets/images/key.png";
import vector2 from "../assets/images/list.png";
import glow from "../assets/images/glow1.png";

import star4 from "../assets/images/sata gra.png";
import star1 from "../assets/images/star1.png";
import star2 from "../assets/images/starlight.png";

const PrivacySection = () => {
  return (
    <section className="bg-[#150E28] relative z-10 xl:px-28 overflow-x-clip py-28 px-10">
      <div>
        <img
          src={star1}
          alt="star"
          className="star  right-[19rem] top-[10rem] "
        />

        <img
          src={star2}
          alt="star"
          className="star left-[30rem] right-0 top-[6rem]"
        />

        <img
          src={star4}
          alt="star"
          className="star left-[40rem] right-0 top-[14rem] "
        />
        <img
          src={star4}
          alt="star"
          className="star left-[55rem] right-0 top-[40rem] "
        />
        <img
          src={star1}
          alt="star"
          className="star left-[50rem] right-0 top-[45rem] "
        />
        <img
          src={star2}
          alt="star"
          className="star  right-[4rem] bottom-[10rem]"
        />
        <img
          src={star4}
          alt="star"
          className="star left-[3rem] bottom-[20rem]  "
        />
      </div>

      <div className="absolute lg:-bottom-[15rem] -left-[10rem] -bottom-9 lg:w-auto lg:h-auto w-[285px] h-[366px] ">
        <img src={glow} alt="flair glow" />
      </div>
      <div className="layout-center  grid gap-8  lg:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h1 className="primary-heading">
            Privacy Policy and
            <span>Terms</span>
          </h1>

          <h5 className="text-[14px] mt-5 text-[#ffffffbf]">
            Last updated on September 12, 2023
          </h5>
          <p className="mt-8">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div className="border border-pink mt-16 z-10 relative leading-[216.4%]  rounded bg-[#d434fe1e] sm:px-9 px-4 py-12">
            <p className="leading-[216.4%]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div className="mt-8">
              <h3 className="text-pink capitalize font-bold text-[16px]">
                Licensing Policy
              </h3>
              <h5 className="text-[14px font-bold]">
                Here are terms of our Standard License:
              </h5>

              <ul className="mt-10 leading-normal flex flex-col gap-4">
                <li className="flex leading-[2] items-s gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <img src={vector2} alt="vector" />
                  </div>

                  <span>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </span>
                </li>
                <li className="flex  items-s gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <img src={vector2} alt="vector" />
                  </div>

                  <span>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </span>
                </li>
              </ul>

              <Link className="btn-primary mx-auto mt-6">Read More</Link>
            </div>
          </div>
        </div>

        <div className=" bg-no-repeat bg-security relative sm:bg-[length:30rem] bg-[length:249px] lg:bg-right-top md:bg-center bg-right-top">
          <div>
            <img src={key} alt="key vector" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default PrivacySection;
