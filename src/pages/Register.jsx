import { Form, useLoaderData } from "react-router-dom";
import { FormInput, RegisterSucces, SubmitBtn } from "../components";
import { customFetch } from "../../utils";

// images
import vector1 from "../assets/images/register.png";
import vector2 from "../assets/images/walk1.png";
import vector3 from "../assets/images/walk2.png";
import glow1 from "../assets/images/register glow1.png";
import glow2 from "../assets/images/register glow2.png";
import star1 from "../assets/images/sata gra.png";
import star2 from "../assets/images/star pu.png";
import star3 from "../assets/images/starlight.png";
import star4 from "../assets/images/star1.png";
import { useState } from "react";

const categoriesUrl = "/hackathon/categories-list";

export const loader = async () => {
  const response = await customFetch(categoriesUrl);
  const categories = response.data;
  return { categories };
};

const Register = () => {
  const { categories } = useLoaderData();
  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    setIsloading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/hackathon/registration", data);
      setIsSubmited(true);
      setIsloading(false);
      return response.data;
    } catch (error) {
      setIsloading(false);
      setError(error?.response?.data);
      return null;
    }
  };

  return (
    <>
      <RegisterSucces isSubmited={isSubmited} setIsSubmited={setIsSubmited} />

      <main className="bg-[#150E28] relative z-10 overflow-clip  sm:px-20 px-10 py-14 overflow-x-clip">
        <div>
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
          <img
            src={star2}
            alt="star"
            className="absolute left-[39rem] tablet:block hidden star bottom-[14rem]"
          />
          <img
            src={star3}
            alt="star"
            className="absolute left-[2rem] tablet:block hidden  star bottom-[4rem]"
          />
        </div>
        <div className="absolute -z-10 left-[0] -top-[1rem]">
          <img src={glow1} alt="glow background" />
        </div>

        <div className="absolute -bottom-[3.5rem] -z-10 mb:hidden  lg:-right-[7rem] -right-[16rem]">
          <img src={glow2} alt="glow background" />
        </div>

        <h1 className="primary-heading text-pink lg:hidden block">Register</h1>
        <section className="flex lg:flex-row flex-col layout-center  justify-center items-center">
          <div className="relative z-10">
            <img src={vector1} alt="vector image" />
          </div>

          <Form
            onSubmit={onSubmit}
            method="POST"
            className="lg:w-[750px] relative  z-10 sm:bg-[#FFFFFF08] rounded-[12px] sm:px-[61px] sm:py-[55px]"
          >
            <h1 className="primary-heading text-pink lg:block hidden">
              Register
            </h1>
            <div className="flex items-baseline gap-2">
              <p>Be part of this movement!</p>
              <div className="border-b border-dotted flex justify-center md:w-[101px] gap-2 border-pink">
                <img src={vector2} alt="vector2" />
                <img src={vector3} alt="vector3" />
              </div>
            </div>
            <h4 className="uppercase sm:text-[24px] text-[20px] mt-4">
              CREATE YOUR ACCOUNT
            </h4>
            <div className="mt-6 grid sm:grid-cols-2 gap-x-5 gap-y-7">
              <FormInput
                label="Team’s Name"
                placeholder="Enter the name of your group"
                name="team_name"
                type="name"
              />
              <FormInput
                label="Phone"
                placeholder="Enter your phone number"
                name="phone_number"
                type="tel"
              />

              <FormInput
                label="Email"
                placeholder="Enter your email address"
                name="email"
                type="email"
                error={error?.email && error?.email[0]}
              />
              <FormInput
                label="Project Topic"
                placeholder="What is your group project topic"
                name="project_topic"
                type="text"
              />

              <div className="flex flex-col relative gap-y-2">
                <label htmlFor="category" className="capitalize">
                  category
                </label>
                <select
                  required
                  name="category"
                  id="category"
                  className="text-[16px] placeholder:text-[14px] bg-[#FFFFFF08] border p-2.5 outline-none  rounded"
                >
                  {[{ name: " Select your category" }, ...categories].map(
                    (category, index) => {
                      return (
                        <option
                          key={index}
                          value={category.id}
                          className="bg-stone-500"
                        >
                          {category.name}
                        </option>
                      );
                    }
                  )}
                </select>
                {error?.category && (
                  <p className="absolute first-letter:capitalize -bottom-6 left-0 text-red-600 text-[12px]">
                    category may not be empty
                  </p>
                )}
              </div>

              <div className="flex flex-col relative gap-y-2">
                <label htmlFor="group_size" className="capitalize">
                  group size
                </label>
                <select
                  required
                  name="group_size"
                  id="group_size"
                  className="text-[16px] placeholder:text-[14px] bg-[#FFFFFF08] border p-2.5 outline-none  rounded"
                >
                  {["select", 5, 10, 15, 20].map((size) => {
                    return (
                      <option key={size} value={size} className="bg-stone-500">
                        {size}
                      </option>
                    );
                  })}
                </select>
                {error?.group_size && (
                  <p className="absolute first-letter:capitalize -bottom-6 left-0 text-red-600 text-[12px]">
                    group size may not be empty
                  </p>
                )}
              </div>
            </div>
            <p className="text-pink mt-5 text-[12px]">
              Please review your registration details before submitting
            </p>
            <div className="flex gap-x-2 mt-2 relative items-center">
              <input
                type="checkbox"
                name="privacy_poclicy_accepted"
                required
                id="privacy"
                className="bg-transparent peer flex-shrink-0 checked:bg-pink appearance-none w-4 h-4  border  rounded-sm "
              />
              <label htmlFor="privacy" className="text-[12px]  relative ">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>

            <div className="mt-7">
              <SubmitBtn text="Register Now" loading={loading} />
            </div>
          </Form>
        </section>
      </main>
    </>
  );
};
export default Register;
