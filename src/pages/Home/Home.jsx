import React, { useEffect } from "react";
import MarqueeComponent from "../../components/MarqueeComponent";
import ImageSlider from "../../components/ImageSlider";
import PremiumHomeText from "../../components/PremiumHomeText";
import InputForm from "../../components/InputForm";
import { Outlet, useParams } from "react-router-dom";
import PremiumHomeText2 from "../../components/PremiumHomeText2";

const Home = () => {
  const params = useParams();
  const scrolltoContainer = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };
  useEffect(() => {
    scrolltoContainer();
  }, []);
  return params?.id ? (
    <Outlet />
  ) : (
    <div className="w-full flex flex-col mt-[100px] transition-all pb-[50px]">
      <div className="">
        <MarqueeComponent />
      </div>
      <div className="flex items-start w-full h-full">
        <div className="z-0 w-[50%]  h-[400px]">
          <ImageSlider />
        </div>
        <div className="z-10 h-[400px] flex-grow bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex items-center">
          <div
            className="cutBox bg-[#63A8AE] h-full"
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
      <div className="w-full h-full relative top-[-100px] z-[900] ">
        <div className=" w-[450px] h-full ml-[12rem] ">
          <div className="bg-[#2E7EB5] p-[10px] rounded-lg box-border">
            <InputForm sellerId={1} />
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
        <span className="italic font-bold text-[#2E7Eb5] text-xl">
          “Testimonial Quote . . . . . Tiffany to provide“
        </span>
      </div>
      <div className="flex items-start w-full h-[400px] relative">
        <div className="z-0 w-[50%] h-[400px] bg-white">
          <div className="w-full h-full flex flex-col pt-6 items-center">
            <img src="/dhp_home_logo.jpg" alt="" className="w-[350px]" />
            <div
              onClick={scrolltoContainer}
              className="flex justify-center !bg-[#63A8AE] items-center py-2 px-6 text-2xl cursor-pointer  transition-all   rounded-lg shadow-md border text-white"
            >
              Free Quote
            </div>
          </div>
        </div>
        <div className=" z-10 h-full flex-grow bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex items-center">
          <div
            className="cutBox bg-[#63A8AE] h-full"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
              width: "calc(30%)", // Expand the width to cover the extra clipped area
              marginLeft: "-20%", // Shift the div to the left by the amount that was clipped
            }}
          ></div>
          <div className="w-full  text-white">
            <PremiumHomeText2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
