import React from "react";
import TextBlock from "./TextBlock";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 h-[70px] w-full z-[1000] shadow-xl drop-shadow-2xl  bg-white uppercase flex items-center justify-between text-[#2E7Eb5]">
      <div className="flex items-center justify-start ml-[5px]">
        <img
          src={"/bbb_logo.jpg"}
          alt="Better Business Logo 1"
          className="h-[60px] w-[100px] object-cover"
        />
      </div>
      <div className="flex  items-center justify-center text-center flex-1 ">
        <p className="subheading">
          <TextBlock section="footer" element="copyright" />
        </p>
      </div>
      <div className="flex items-center justify-end ">
        <Link
          to="/remove-my-data"
          className="  text-base subheading border-r border-r-[#2E7Eb5] px-2"
        >
          <TextBlock section="footer" element="removeMyData" />
        </Link>

        <Link
          to="/terms-and-conditions"
          className="text-base subheading border-r border-r-[#2E7Eb5] px-2"
        >
          <TextBlock section="footer" element="termsAndConditions" />
        </Link>

        <Link to="/privacy" className="px-2 text-base subheading">
          <TextBlock section="footer" element="privacy" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
