import { Link } from "react-router-dom";
import Logo from "./Logo";
import { links } from "../../utils/data";

import vector1 from "../assets/images/instagram.png";
import vector2 from "../assets/images/x.png";
import vector3 from "../assets/images/facebook.png";
import vector4 from "../assets/images/linkedin.png";
import vector5 from "../assets/images/location.png";
import vector6 from "../assets/images/call.png";
import vector7 from "../assets/images/sata gra.png";

import star1 from "../assets/images/star1.png";
import star2 from "../assets/images/starlight.png";

const Footer = () => {
  return (
    <footer className="bg-[#100B20] relative px-11">
      <img src={star1} alt="star" className="star left-10 top-12 " />
      <img src={star1} alt="star" className="star right-[8rem] bottom-[9rem]" />
      <img src={star2} alt="star" className="star right-[29rem] top-[5rem]" />
      <div className="max-w-[1072px]  mx-auto pt-16">
        <div className="flex justify-between flex-wrap  sm:flex-row flex-col gap-x-5 gap-y-9 items-start">
          <div className="basis-[40%]">
            <Logo />
            <p className="text-[12px] mt-3 leading-[172.4%]">
              GetLinked tech Hackathon is a technology innovation program
              established by a group of organization with the aim of showcasing
              young and talented individuals in the fiekd of technology{" "}
            </p>

            <div className=" lg:mt-20 mt-9 flex  lg:gap-9 gap-4    text-[12px]">
              <p>Terms of Use</p>
              <span className="w-[2px] h-[17px] bg-pink"></span>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="">
            <h3 className="capitalize text-pink text-[14px]">Useful Links</h3>
            <ul>
              {links.map((link, index) => (
                <li key={index} className="text-[12px] mt-3 capitalize">
                  <Link to={link.path}>{link.pathName}</Link>
                </li>
              ))}
              <li className="text-[12px] mt-3 capitalize">
                <Link to={"/register"}>register</Link>
              </li>
              <li className="flex gap-5 mt-3 items-center">
                <span className="text-pink">Follow us</span>
                <a href="#">
                  <img src={vector1} alt="instgram icon" />
                </a>
                <a href="#">
                  <img src={vector2} alt="twitter icon" />
                </a>
                <a href="#">
                  <img src={vector3} alt="facebook icon" />
                </a>
                <a href="#">
                  <img src={vector4} alt="linkedin icon" />
                </a>
              </li>
            </ul>
          </div>

          <div className="basis-[10rem]">
            <h3 className="capitalize text-pink text-[14px]">Contact Us</h3>

            <ul className="text-[12px]">
              <li className="flex gap-4 items-start py-5">
                <div className="flex-shrink-0">
                  <img src={vector6} alt="phone number icon" />
                </div>
                <span>+234 679 81819</span>
              </li>

              <li className="flex gap-4 items-start ">
                <div className="flex-shrink-0">
                  <img src={vector5} alt="location  icon" />
                </div>
                <span>27,Alara Street Yaba 100012 Lagos State</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-9 grid place-items-center">
          <img src={vector7} alt="vector" />
          <p className="mt-4 text-[12px]">
            All rights reserved. © getlinked Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
