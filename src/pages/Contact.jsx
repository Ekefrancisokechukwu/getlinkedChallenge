import { Form } from "react-router-dom";

import vector1 from "../assets/images/instagram.png";
import vector2 from "../assets/images/x.png";
import vector3 from "../assets/images/facebook.png";
import vector4 from "../assets/images/linkedin.png";
import lens1 from "../assets/images/intouch lens1.png";
import lens2 from "../assets/images/intouch lens2.png";
import star1 from "../assets/images/sata gra.png";
import star2 from "../assets/images/star pu.png";
import star3 from "../assets/images/starlight.png";
import star4 from "../assets/images/star.png";

import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // const values = [...formData.values()];
  try {
    const response = await customFetch.post("/hackathon/contact-form", data);
    toast.success("Message sent succesfuly");
    console.log(request);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

const Contact = () => {
  return (
    <main
      className="bg-[#150E28] sm:py-[5rem] py-5 xl:px-[8rem]
     lg:px-16 relative sm:px-10  overflow-x-clip
       z-10  "
    >
      <div className="">
        <img
          src={star1}
          alt="star"
          className="absolute top-6 mb:left-10 star"
        />
        <img
          src={star3}
          alt="star"
          className="absolute right-[9rem] mb:right-8 star top-5 mb:top-16"
        />
        <img
          src={star4}
          alt="star"
          className="absolute right-[2rem]  star bottom-[4rem]"
        />
      </div>

      <div className="absolute -left-12 -z-10  md:-top-[2rem] top-[-1rem]   lg:w-[650px] sm:w-[400px] w-[356px]">
        <img src={lens1} alt="vector glow" />
      </div>
      <div className="absolute lg:-right-24 right-0 -z-10 bottom-0 xl:w-[500px] lg:w-[650px]  sm:w-[400px] md:block hidden w-[396px]">
        <img src={lens2} alt="vector glow" />
      </div>

      <div
        className="flex md:flex-row flex-col layout-center sm:gap-20
       gap-8 sm:justify-between justify-center lg:gap-0"
      >
        <div className="md:block hidden">
          <h2 className="primary-heading text-pink">Get in touch</h2>
          <div className="mt-[17px] flex flex-col text-[16px] gap-[17px]">
            <h3 className="capitalize">
              Contact <span className="block">Information</span>{" "}
            </h3>
            <h3 className="capitalize">
              27,Alara Street <span className="block">Yaba 100012</span>{" "}
              <span className="block">Lagos State</span>
            </h3>
            <h3>Call Us : 07067981819</h3>
            <h3>
              we are open from Monday-Friday{" "}
              <span className="block">08:00am - 05:00pm</span>{" "}
            </h3>
            <div className="">
              <h4 className="capitalize text-pink">Share on</h4>
              <div className="flex items-center mt-3 gap-3">
                <img src={vector1} alt="instgram icon" />
                <img src={vector2} alt="twitter icon" />
                <img src={vector3} alt="facebook icon" />
                <img src={vector4} alt="linkedin icon" />
              </div>
            </div>
          </div>
        </div>
        <Form
          method="POST"
          className="sm:bg-[#FFFFFF08] relative  xl:w-[617px] sm:py-[55px] py-8 lg:px-[90px] px-8 rounded-[12px]"
        >
          <img
            src={star2}
            alt="star"
            className="absolute star -left-4 mb:left-3 mb:top-[35rem] top-[28rem]"
          />

          <h2 className="text-pink text-[20px] font-semibold">
            Questions or need assistance?
          </h2>
          <h2 className="text-pink text-[20px] font-semibold">
            Let us know about it!
          </h2>

          <p className="mt-3 sm:hidden block ">
            Email us below to any question related to our event
          </p>

          <div className="mt-9 flex flex-col gap-y-[42px]">
            <FormInput name="first_name" type="text" placeholder="First Name" />
            <FormInput name="email" type="email" placeholder="Mail" />
            <div className="formInput flex flex-col">
              <textarea
                name="message"
                placeholder="Message"
                className="text-[16px] h-[119px] resize-none bg-[#FFFFFF08] border p-2.5 outline-none  rounded"
              ></textarea>
            </div>

            <SubmitBtn />
          </div>
        </Form>
      </div>

      <div className="md:hidden grid place-items-center">
        <h4 className="capitalize text-pink">Share on</h4>
        <div className="flex items-center mt-3 gap-3">
          <img src={vector1} alt="instgram icon" />
          <img src={vector2} alt="twitter icon" />
          <img src={vector3} alt="facebook icon" />
          <img src={vector4} alt="linkedin icon" />
        </div>
      </div>
    </main>
  );
};
export default Contact;
