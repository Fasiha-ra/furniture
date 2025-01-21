// eslint-disable-next-line no-unused-vars
import React from "react";
import { SiAffinitydesigner } from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";
const Attributes = () => {
  const AttributeData = [
    {
      icon: <SiAffinitydesigner />,
      title: "Custom Design",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusamus.",
    },
    {
      icon: <SiAffinitydesigner />,
      title: "Custom Design",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusamus.",
    },
    {
      icon: <SiAffinitydesigner />,
      title: "Custom Design",
      para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusamus.",
    },
  ];
  return (
    <div className="container mx-auto py-0 px-5 my-14">
      <div className="text-center">
        <span className="uppercase text-xs block mb-4 lg:mb-7">how we can help</span>
        <h2 className="lg:text-4xl text-2xl lg:w-2/5 mx-auto my-0 font-bold mb-7">book a consultation for your dream kitchen</h2>
      </div>
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 ">
      {AttributeData.map((card,ind)=>(
        <div key={ind} className="max-w-[350px] w-full text-center border py-10 px-6 mx-auto my-0">
            <div className="flex justify-center text-4xl mb-3">{card.icon}</div>
            <strong className="mb-3">{card.title}</strong>
            <p className="mb-7">{card.para}</p>
            <button className="transparent text-3xl"><IoIosArrowRoundForward /></button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Attributes;
