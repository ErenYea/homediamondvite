import React from "react";
import { Link } from "react-router-dom";
import TextBlock from "./TextBlock";
import { Switch } from "@mui/material";
import { useAppStore } from "../lib/store";

const NavBar = () => {
  const { language, setLanguage } = useAppStore();
  const handleLanguageToggle = (event) => {
    // console.log("here");

    setLanguage(event.target.checked ? "es" : "en");
  };
  return (
    <div className="fixed top-0 h-[80px]  w-full border z-[1000] border-green-600 bg-white box-border text-teal-500 uppercase flex justify-between items-center">
      <div className="flex items-center">
        <Link to={"/"}>
          <img src={"/dhp_home_logo.jpg"} alt="Logo" className="w-[150px]" />
        </Link>
        <div className="ml-[20px] text-teal-500 mt-2 space-x-5">
          <Link href="/products" className=" hover:underline">
            <TextBlock section="navbar" element="products" />
          </Link>
          <Link href="/FAQ" className="hover:underline">
            <TextBlock section="navbar" element="faq" />
          </Link>
          <Link href="/contact-us" className=" hover:underline">
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
