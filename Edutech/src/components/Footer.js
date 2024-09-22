import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around p-2">
        <div>
          <h1 className="text-orange-600 font-extrabold text-3xl">Learnyst</h1>
          <p className="text-gray-600 text-sm">
            Lorem Ipsum is simply dummy text
          </p>
        </div>
        <div className="flex justify-around px-4">
          <div>
            <h1 className="text-black font-bold text-sm px-4">
              Important Links
            </h1>
            <p className="text-gray-600 text-sm">About Us</p>
            <p className="text-gray-600 text-sm">Contact Us</p>
            <p className="text-gray-600 text-sm">Career</p>
          </div>
          <div>
            <h1 className="text-black font-bold text-sm px-4">Knowledge</h1>
            <p className="text-gray-600 text-sm">Blog</p>
            <p className="text-gray-600 text-sm">Site Map</p>
          </div>
          <div>
            <h1 className="text-black font-bold text-sm px-4">Policies</h1>
            <p className="text-gray-600 text-sm">Terms of Service</p>
            <p className="text-gray-600 text-sm">Privacy Policy</p>
            <p className="text-gray-600 text-sm">Refund Policy</p>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="text-gray-600 font-medium">
        2024 All Rights Reserved Pvt Ltd
      </p>
    </>
  );
};

export default Footer;
