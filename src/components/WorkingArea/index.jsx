// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { areaData } from "../Constant/Constant";
const WorkingArea = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
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
    <div className="mx-0 my-10 overflow-hidden">
      <h2 className="capitalize text-center mb-2 lg:mb-5 text-2xl lg:text-4xl">
        over working area
      </h2>
      <Slider {...setting}>
        {areaData.map((card, id) => (
          <div key={id} className="p-4 relative overflow-hidden w-1/4">
            <img
              src={card.imag}
              alt="card imag"
              className="rounded-2xl hover:scale-105 transition-transform duration-200 ease-in-out"
            />
            <strong className="my-0 mx-auto absolute bg-white/30 rounded-3xl py-2 px-0 text-center  bottom-6 left-0 right-0 flex justify-center w-5/6 backdrop-blur-md">
              {card.title}
            </strong>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkingArea;
