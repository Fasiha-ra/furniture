// App.js or YourComponent.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import leftImage from "../../assets/area.jpg"; // Replace with your image path
import bgImage from "../../assets/map.png"; // Replace with your background image path
import { IoMdArrowRoundForward } from "react-icons/io";
const ContactUS = () => {
  return (
    <div className="flex flex-wrap flex-col-reverse lg:flex-row bg-white overflow-hidden">
      {/* Left Side with Image and Badge */}
      <div className="relative w-full lg:w-1/2 p-4">
        <img
          src={leftImage}
          alt="Kitchen Design"
          className="w-full h-auto rounded-lg"
        />
        <div className="absolute bottom-10 right-10 flex justify-center items-center">
          <div className="bg-primary text-white text-center rounded-full p-3 w-30 h-30 lg:w-40 lg:h-40 flex flex-col justify-center items-center shadow-lg">
            <span className="lg:text-5xl text-2xl font-bold">25</span>
            <span className="lg:text-lg text-sm py-2 uppercase lg:w-[inherit] w-20">Years Guarantee</span>
          </div>
        </div>
      </div>

      {/* Right Side with Form */}
      <div
        className="w-full lg:w-1/2 p-8 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-md mx-auto">
          <span className="text-primary uppercase text-sm font-semibold">
            Get Free Quote
          </span>
          <h2 className="text-2xl md:text-4xl font-bold my-4">
            Schedule a free designer consultation
          </h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-primary"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-primary"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Message details"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-primary"
            />
            <button
              type="submit"
              className="md:w-1/3 p-3 flex justify-center items-center gap-1 bg-black text-white rounded-full hover:bg-primary transition-all"
            >
              Submit<IoMdArrowRoundForward />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
