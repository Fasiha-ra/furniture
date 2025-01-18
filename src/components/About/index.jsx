// eslint-disable-next-line no-unused-vars
import React from "react";
import aboutus from "../../assets/aboutus.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import price from "../../assets/price.png";
import design from "../../assets/design.png";
import team from "../../assets/team.png";
const About = () => {
  const data = [
    {
      img: price,
      title: "Reasonable Prices",
      para: "We produce furniture to fulfill needs of all people and offer it at affordable and fair prices",
    },
    {
      img: design,
      title: "Exclusive design",
      para: "Mixture of imagination, experience and professionalism is the secret of our design!",
    },
    {
      img: team,
      title: "Professional Team",
      para: "We are proud of our amicable, professional and always developing team!",
    },
  ];
  return (
    <>
      <div className="container mx-auto w-full p-4 flex items-center justify-center flex-wrap gap-8 mb-5 lg:flex-nowrap ">
        <div className="w-full lg:w-3/5 overflow-hidden ">
          <img
            src={aboutus}
            alt="aboutus"
            className="w-full hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="w-full lg:w-2/5">
          <strong className="text-primary text-base uppercase block tracking-wide mb-2">
            About us
          </strong>
          <h2 className=" font-semibold mb-3 text-gray-700 lg:text-5xl lg:mb-5 md:text-3xl sm:text-xl">
            Creative solutions by professional designers
          </h2>
          <p className="text-base tracking-wide mb-5 text-gray-800">
            Your kitchen is an expression of who you are, and its design should
            match your lifestyle. Whether you have traditional tastes or desire
            a modern feel, we can design your dream kitchen to suit any purpose.
          </p>
          <button className="flex gap-3 items-center bg-gray-900  text-sm text-white rounded-full py-2 px-4  uppercase hover:bg-primary transition-colors duration-300">
            continue reading <IoIosArrowRoundForward className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-0 mb-6 mx-auto">
        {data.map((item, ind) => (
          <div key={ind} className="p-4 flex justify-center items-start gap-3">
            <img src={item.img} alt="image" />
            <div>
              <strong className="block text-base text-gray-900">{item.title}</strong>
              <p className="text-sm text-gray-800">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
