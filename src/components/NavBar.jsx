import React from "react";
import { Link } from "react-router-dom";
import TextBlock from "./TextBlock";
import { Switch } from "@mui/material";
import { useAppStore } from "../lib/store";

const NavBar = () => {
  const { language, setLanguage } = useAppStore();
  const handleLanguageToggle = (event) => {
    setLanguage(event.target.checked ? "es" : "en");
  };
  return (
    <div className="fixed top-0 h-[100px] shadow-xl w-full  z-[1000] transition-all bg-white box-border text-[#2E7Eb5] uppercase flex justify-between items-center">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src={"/dhp_home_logo.jpg"} alt="Logo" className="w-[150px]" />
        </Link>
        <div className="ml-[20px]  mt-2 space-x-5 font-semibold">
          <Link to="/products" className=" hover:underline">
            <TextBlock section="navbar" element="products" />
          </Link>
          <Link to="/FAQ" className="hover:underline">
            <TextBlock section="navbar" element="faq" />
          </Link>
          <Link to="/contact-us" className=" hover:underline">
            <TextBlock section="navbar" element="contact" />
          </Link>
        </div>
      </div>
      <div className="mr-2">
        <span>English</span>
        <Switch checked={language === "es"} onChange={handleLanguageToggle} />
        <span>Español</span>
      </div>
    </div>
  );
};

export default NavBar;
