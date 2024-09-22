import React from "react";

import image1 from "../constants/pic2.jpg";
import logo1 from "../constants/pic6.jpg";
import logo2 from "../constants/pic7.jpg";
import logo3 from "../constants/pic8.jpg";
import logo4 from "../constants/pic9.jpg";
import logo5 from "../constants/pic10.jpg";
import logo6 from "../constants/pic11.jpg";
const Features = () => {
  const item = [
    {
      id: 1,
      logo: logo1,
      name: "Live Online Classes",
      desc: "Lorem Ipsum is simply dummy text ",
    },
    {
      id: 2,
      logo: logo2,
      name: "1:1 Doubt Classes",
      desc: "Lorem Ipsum is simply dummy text ",
    },
    {
      id: 2,
      logo: logo3,
      name: "Weekly Online Test",
      desc: "Lorem Ipsum is simply dummy text ",
    },
    {
      id: 2,
      logo: logo4,
      name: "Practise Till Perfection",
      desc: "Lorem Ipsum is simply dummy text ",
    },
    {
      id: 2,
      logo: logo5,
      name: "Insights, summary and Recomendations",
      desc: "Lorem Ipsum is simply dummy text ",
    },
    {
      id: 2,
      logo: logo6,
      name: "Curriculum Mopped Learning",
      desc: "Lorem Ipsum is simply dummy text ",
    },
  ];
  return (
    <div className="relative p-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image1})`,
          opacity: 0.5,
        }}
      ></div>
      <div className="relative flex justify-center items-center flex-col shadow-2xl max-w-6xl text-lg p-10  bg-slate-400/35">
        <h1 className="font-bold m-2 p-6 text-orange-600  text-4xl">
          What's unique with Learnyst
        </h1>
        <p className="font-medium mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="flex flex-wrap content-center justify-center ">
          {item.map((item) => {
            return (
              <div className="items-center bg-white w-64  shadow-xl  m-2">
                <img className="" src={item.logo} alt="notpresent" />
                <h1 className="text-orange-600 font-bold text-left m-2">
                  {item.name}
                </h1>
                <p className="text-left m-2">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
