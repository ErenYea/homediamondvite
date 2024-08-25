import React from "react";
import TextBlock from "./TextBlock";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 h-[50px] w-full z-[1000] shadow-xl drop-shadow-2xl  bg-white uppercase flex items-center justify-between text-[#2E7Eb5]">
      <div className="flex items-center justify-start ml-[5px]">
        <img
          src={"/bbb_logo.jpg"}
          alt="Better Business Logo 1"
          className="h-[40px] w-[100px]"
        />
      </div>
      <div className="flex  items-center justify-center text-center flex-1 ">
        <p className="subheading">
          <TextBlock section="footer" element="copyright" />
        </p>
      </div>
      <div className="flex items-center justify-end ">
        <Link
          to="/terms-and-conditions"
          className=" ml-[10px] text-base subheading"
        >
          <TextBlock section="footer" element="termsAndConditions" />
        </Link>
        <span className="mx-[4px]"> | </span>
        <Link to="/privacy" className="mr-[5px] text-base subheading">
          <TextBlock section="footer" element="privacy" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
