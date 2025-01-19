// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Heroimg from "../../assets/hero.png";
import HeroBG from "../../assets/heroBG.png" 
import Heroimg1 from "../../assets/project-bg.png" 
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
const Hero = () => {
  const slides = [
    {
      title: "Make a kitchen part of the family",
      description:
        "Kitchens should be designed around what's truly important, family, food, and life.",
      image: Heroimg,
    },
    {
      title: "Cook with style",
      description:
        "Discover modern designs that bring functionality and beauty together.",
      image: Heroimg1,
    },
    {
      title: "Your dream kitchen awaits",
      description:
        "Personalize your space with custom designs and top-notch finishes.",
      image:Heroimg,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full lg:h-screen md:h-screen bg-gray-900 overflow-hidden h-[300px]">
      <div className="hero-container group relative flex items-center lg:h-full md:h-full h-[300px]">
      <div className="pr-2 lg:w-full md:w-full lg:left-40 md:left-40 left-10 top-0 bottom-0  absolute z-10 flex flex-col justify-center">
          <h1 className="lg:text-4xl md:text-1xl font-bold text-white">
            {slides[currentSlide].title}
          </h1>
          <p className="mt-4 lg:text-lg md:text-base text-white">
            {slides[currentSlide].description}
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
            src={slides[currentSlide].image}
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
