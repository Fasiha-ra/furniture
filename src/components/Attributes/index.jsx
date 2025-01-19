// eslint-disable-next-line no-unused-vars
import React from "react";
import { SiAffinitydesigner } from "react-icons/si";
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
    <div className="container m-10 ">
    <div className="grid grid-cols-3 ">
      {AttributeData.map((card,ind)=>(
        <div key={ind}>
            <div>{card.icon}</div>
            <strong>{card.title}</strong>
            <p>{card.para}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Attributes;
