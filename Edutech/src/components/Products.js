import React, { Fragment } from "react";
import image2 from "../constants/pic3.jpg";
import image3 from "../constants/pic4.jpg";
import image4 from "../constants/pic5.jpg";
const Products = () => {
  const item = [
    {
      id: 1,
      name: " Summary of SAT 2023 result",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      img: image2,
    },
    {
      id: 2,
      name: " Our Performance in SAT",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      img: image3,
    },
    {
      id: 3,
      name: "SAT 2023 Toppers Talk",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting",
      img: image4,
    },
  ];

  return (
    <Fragment>
      <div className="relative p-32 ">
        <div className="relative flex justify-center items-center flex-col shadow-2xl max-w-6xl text-lg p-10  bg-white">
          <h1 className="font-bold m-2 p-6 text-orange-600  text-4xl">
            Learnyst Blog
          </h1>
          <p className="font-medium mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="flex ">
            {item.map((item) => {
              return (
                <div className="items-center bg-white w-64 m-2 shadow-xl">
                  <img className="" src={item.img} alt="notpresent" />
                  <h1 className="text-orange-600 font-bold text-left m-2">
                    {item.name}
                  </h1>
                  <p className="text-left m-2">{item.desc}</p>
                  <p className="text-right font-bold text-sm m-2">Read More</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
