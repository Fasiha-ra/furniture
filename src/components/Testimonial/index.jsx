// eslint-disable-next-line no-unused-vars
import React from "react";
import area from "../../assets/area.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../Constant/Constant";
const Testimonial = () => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  

  return (
    <div className="bg-gray-100 mb-10 overflow-hidden">
      <Slider {...setting}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="flex justify-center lg:flex-row items-center flex-col">
              <div className="lg:w-1/2 p-4 lg:p-8">
                <span className="text-primary uppercase mb-2 text-sm">
                  Our Clients
                </span>
                <h2 className="text-2xl lg:text-4xl font-semibold">
                  Here&apos;s what our satisfied clients are saying
                </h2>
                <div className="p-4">
                  <RiDoubleQuotesL className="text-3xl text-gray-500 mb-2" />
                  <p className="text-lg text-gray-700 mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="my-4 flex items-center gap-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full w-12 h-12"
                    />
                    <div>
                      <strong className="block">{testimonial.name}</strong>
                      <span className="text-sm text-gray-500">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <img
                  src={area}
                  alt="testimonial visual"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
