import React, { useMemo } from "react";
import PremiumHomeText from "./PremiumHomeText";
import InputForm from "./InputForm";
import MarqueeComponent from "./MarqueeComponent";
import ImageSlider from "./ImageSlider";
import { useParams } from "react-router-dom";
import { companies } from "../lib/constant";

const Company = () => {
  const params = useParams();
  const scrolltoContainer = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };
  const companyData = useMemo(
    () => companies.find((ob) => ob.id == params.id) || null,
    [params.id]
  );
  return (
    companyData && (
      <div className="font-tainos w-full flex flex-col mt-[100px] pb-[50px]">
        <div className="">
          <MarqueeComponent />
        </div>
        <div className="flex items-start w-full h-full">
          <div className="z-0 w-[50%]  h-[400px]">
            <ImageSlider />
          </div>
          <div className="z-10 h-[400px] flex-grow bg-teal-500 flex items-center">
            <div
              className="cutBox bg-teal-500 h-full"
              style={{
                clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
                width: "calc(30% )", // Expand the width to cover the extra clipped area
                marginLeft: "-20%", // Shift the div to the left by the amount that was clipped
              }}
            ></div>
            <div className="w-full text-white mr-[50px]">
              <PremiumHomeText />
            </div>
          </div>
        </div>
        <div className="w-full h-[450px] flex relative top-[-100px] z-[900] ">
          <div className=" w-[450px] h-full ml-[12rem] ">
            <div className="bg-[#0492c2] p-[10px] rounded-lg box-border">
              <InputForm sellerId={1} companyid={params.id} />
            </div>
          </div>
          <div className="w-full h-full flex justify-center space-x-5 mt-5  items-center">
            <img src={companyData.logo} alt="" className=" w-48 " />
            {/* <div className="text-2xl font-bold">{companyData.name}</div> */}
            <div className="text-2xl font-semibold max-w-[50%]">
              {" "}
              We have some fantastic news to share! At{" "}
              <span className="font-bold text-teal-500">
                {companyData.name}
              </span>{" "}
              we are committed to supporting not just your career but also your
              personal life. We are thrilled to announce that we have added a
              new voluntary benefit to your package – Diamond Home Protection’s
              Home Warranty Service
            </div>
          </div>
        </div>
        <div className="w-full flex justify-evenly ">
          <span className="">
            <img src="/logo1.png" alt="" className="w-[200px]" />
          </span>
          <span className="">
            <img src="/logo1.png" alt="" className="w-[200px]" />
          </span>
          <span className="">
            <img src="/logo1.png" alt="" className="w-[200px]" />
          </span>
        </div>
        <div className="w-full flex justify-center items-center mb-4 mt-4">
          <span className="italic font-bold text-blue-600 text-xl">
            “Testimonial Quote . . . . . Tiffany to provide“
          </span>
        </div>
        <div className="flex items-start w-full h-[400px] relative">
          <div className="z-0 w-[50%] h-[400px] bg-white">
            <div className="w-full h-full flex flex-col pt-6 items-center">
              <img src="/dhp_home_logo.jpg" alt="" className="w-[350px]" />
              <div
                onClick={scrolltoContainer}
                className="flex justify-center bg-teal-400 items-center py-2 px-6 text-2xl cursor-pointer hover:bg-blue-400 transition-all   rounded-lg shadow-md border text-white"
              >
                Free Quote
              </div>
            </div>
          </div>
          <div className=" z-10 h-full flex-grow bg-teal-500 flex items-center">
            <div
              className="cutBox bg-teal-500 h-full"
              style={{
                clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
                width: "calc(30%)", // Expand the width to cover the extra clipped area
                marginLeft: "-20%", // Shift the div to the left by the amount that was clipped
              }}
            ></div>
            <div className="w-full  text-white">
              <PremiumHomeText />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Company;
