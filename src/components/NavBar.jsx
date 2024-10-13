import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextBlock from "./TextBlock";
import { Switch } from "@mui/material";
import { useAppStore } from "../lib/store";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const { language, setLanguage } = useAppStore();
  const [openDropDown, setOpenDropDown] = useState(false);
  const handleLanguageToggle = (event) => {
    setLanguage(event.target.checked ? "es" : "en");
  };
  return (
    <div className="fixed top-0 h-[100px] shadow-xl w-full  z-[1000] transition-all bg-white box-border text-[#2E7Eb5] uppercase flex justify-between items-center">
      <div className="flex items-center justify-between sm:justify-start w-full">
        <Link to={"/"}>
          <img src={"/dhp_home_logo.jpg"} alt="Logo" className="w-[200px]" />
        </Link>
        <div className="ml-[20px] hidden sm:flex mt-2 space-x-5 font-semibold">
          {/* <Link to="/faq" className="hover:underline">
            <TextBlock section="navbar" element="faq" />
          </Link> */}
          <Link
            to="/contact-us"
            className=" hover:underline"
            onClick={() => setOpenDropDown(false)}
          >
            <TextBlock section="navbar" element="contact" />
          </Link>
        </div>
        <div className="sm:hidden w-10 cursor-pointer mr-2 transition-all">
          {openDropDown ? (
            <XMarkIcon onClick={() => setOpenDropDown(false)} />
          ) : (
            <Bars3Icon onClick={() => setOpenDropDown(true)} />
          )}
        </div>
      </div>
      <div className="mr-2 hidden sm:flex sm:items-center">
        <span className="subheading">English</span>
        <Switch checked={language === "es"} onChange={handleLanguageToggle} />
        <span className="subheading">Español</span>
      </div>
      {openDropDown && (
        <div
          className={`sm:hidden absolute drop-shadow-md gap-4 shadow-lg top-[100px] transition-all bg-gray-300 h-[320px] w-full py-10 px-4 flex flex-col items-center `}
        >
          <Link
            to="/contact-us"
            className=" hover:underline bg-white w-full text-center rounded-lg py-2"
            onClick={() => setOpenDropDown(false)}
          >
            <TextBlock section="navbar" element="contact" />
          </Link>
          <Link
            to="/remove-my-data"
            className=" hover:underline bg-white w-full text-center rounded-lg py-2  text-base subheading border-r border-r-[#2E7Eb5] px-2 lg:!text-sm"
            onClick={() => setOpenDropDown(false)}
          >
            <TextBlock section="footer" element="removeMyData" />
          </Link>

          <Link
            to="/terms-and-condition"
            className="text-base  hover:underline bg-white w-full text-center rounded-lg py-2 subheading border-r border-r-[#2E7Eb5] px-2 lg:!text-sm"
            onClick={() => setOpenDropDown(false)}
          >
            <TextBlock section="footer" element="termsAndConditions" />
          </Link>

          <Link
            to="/privacy"
            className="px-2 hover:underline bg-white w-full text-center rounded-lg py-2 text-base subheading lg:!text-sm"
            onClick={() => setOpenDropDown(false)}
          >
            <TextBlock section="footer" element="privacy" />
          </Link>
          <div className="sm:flex bg-white w-full text-center rounded-lg ">
            <span className="subheading">English</span>
            <Switch
              checked={language === "es"}
              onChange={handleLanguageToggle}
            />
            <span className="subheading">Español</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
