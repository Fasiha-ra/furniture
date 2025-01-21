// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import HeroBG from "../../assets/heroBG.png" 
import {HeroSlides} from "../Constant/Constant"
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HeroSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === HeroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full lg:h-screen md:h-screen bg-gray-900 overflow-hidden h-[300px]">
      <div className="hero-container group relative flex items-center lg:h-full md:h-full h-[300px]">
      <div className="pr-2 lg:w-full md:w-full lg:left-40 md:left-40 left-10 top-0 bottom-0  absolute z-10 flex flex-col justify-center">
          <h1 className="lg:text-4xl md:text-1xl font-bold text-white">
            {HeroSlides[currentSlide].title}
          </h1>
          <p className="mt-4 lg:text-lg md:text-base text-white">
            {HeroSlides[currentSlide].description}
          </p>
          <button className="mt-6 px-6 py-2 text-gray-800 w-56 bg-white rounded-lg hover:bg-gray-700">
            Find a Showroom →
          </button>
        </div>
        <div className="w-2/5 h-full relative">
        {/* Text Section */}
        <img
            src={HeroBG}
            alt="Slide Image"
            className="w-full h-full object-cover"
          />
       
        </div>
        {/* Image Section */}
        <div className="w-3/5 h-full absolute z-0 right-0">
          <img
            src={HeroSlides[currentSlide].image}
            alt="Slide Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute z-50 left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handlePrev}
        >
          <MdArrowBackIosNew />
        </button>
        <button
          className="absolute  right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={handleNext}
        >
        <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Hero;
