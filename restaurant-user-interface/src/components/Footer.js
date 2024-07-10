import React from "react";

const Footer = () => {
  return (
    <div
      className="flex justify-center items-center shadow-lg p-4 text-white "
      style={{ backgroundColor: "rgb(35, 39, 54" }}
    >
      <h1 className="m-2 text-xl" style={{ color: "rgb(122, 156, 68)" }}>
        SpiceVilla🌶️
      </h1>
      <p className="font-semibold">
        Made with🧡in <u style={{ color: "rgb(122, 156, 68)" }}>INDIA</u>
      </p>
    </div>
  );
};

export default Footer;
