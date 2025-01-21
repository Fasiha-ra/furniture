// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicesData } from "../Constant/Constant";
const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

 
  return (
    <div className="bg-[url('/src/assets/services-bg.png')] bg-cover bg-center h-full bg-gray-50 ">
      <div className=" flex justify-between flex-col px-5 py-10 my-0 mx-auto lg:flex-row  ">
        <div className="lg:w-1/4  py-8 ">
          <strong className="text-primary font-bold block mb-2">
            HOW WE WORKs
          </strong>
          <h3 className="font-bold lg:text-5xl md:text-2xl mb-3">
            3 Easy Steps to Get Interior Design
          </h3>
          <p className="text-base">
            The of your kitchen varies from one layout to another. The shape of
            the kitchen also determines the space for cabinets, countertops, and
            accessories.
          </p>
        </div>
        <div className="lg:w-3/4 py-8 overflow-hidden">
          <Slider {...settings}>
            {servicesData.map((slide) => (
              <div key={slide.id} className="p-4 w-80">
                <div className="bg-white min-h-96 h-full p-4 rounded-lg shadow-md  flex flex-col items-start justify-center">
                  <strong className="text-center  text-7xl text-gray-300 block mb-5">
                    0{slide.id}
                  </strong>
                  <strong className="block mb-5 w-52 lg:text-2xl md:text-xl font-medium">
                    {slide.title}
                  </strong>
                  <p className="text-base mb-4 h-28">{slide.para}</p>
                  <button className="transparent text-base text-black uppercase">Read more</button>
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
