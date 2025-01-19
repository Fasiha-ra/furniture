// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    // autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderData = [
    {
      id: 1,
      title: "We Visit You at Home",
      para: "We will measure your kitchen, ask you questions and start the actual design process with you.",
    },
    {
      id: 2,
      title: "Preliminary Computer Designs",
      para: "We will use the measurements we took of your kitchen to put together preliminary designs...",
    },
    {
      id: 3,
      title: "Begin The Detailed Design Process",
      para: "Once we have the preliminary designs complete, we will begin to put together detailed designs..",
    },
    {
      id: 4,
      title: "Begin The Detailed Design Process",
      para: "Once we have the preliminary designs complete, we will begin to put together detailed designs..",
    },
    {
      id: 5,
      title: "Begin The Detailed Design Process",
      para: "Once we have the preliminary designs complete, we will begin to put together detailed designs..",
    },
    {
      id: 6,
      title: "Begin The Detailed Design Process",
      para: "Once we have the preliminary designs complete, we will begin to put together detailed designs..",
    },
  ];
  return (
    <div className="bg-[url('/src/assets/services-bg.png')] bg-cover bg-center h-[500px] bg-gray-50 ">
      <div className="container flex justify-between flex-col px-5 py-10 my-0 mx-auto lg:flex-row  ">
        <div className="w-1/4  py-8 ">
          <strong className="text-primary font-bold block mb-2">HOW WE WORKs</strong>
          <h3 className="font-bold text-5xl mb-3">3 Easy Steps to Get Interior Design</h3>
          <p className="text-base">
            The of your kitchen varies from one layout to another. The shape of
            the kitchen also determines the space for cabinets, countertops, and
            accessories.
          </p>
        </div>
        <div className="w-3/4 py-8 overflow-hidden">
          <Slider {...settings}>
            {sliderData.map((slide) => (
              <div key={slide.id} className="p-4  w-80">
                <div className="bg-white p-4 rounded-lg shadow-md h-80 flex flex-col items-start justify-center">
                  <strong className="text-center text-7xl text-gray-300 block mb-5">0{slide.id}</strong>
                  <strong className="block mb-5 text-xl font-medium">{slide.title}</strong>
                  <p className="text-base mb-4">{slide.para}</p>
                  <button className="transparent text-black">Read more</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;
