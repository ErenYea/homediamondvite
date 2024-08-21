import React from "react";
import MarqueeComponent from "../../components/MarqueeComponent";
import ImageSlider from "../../components/ImageSlider";
import PremiumHomeText from "../../components/PremiumHomeText";
import InputForm from "../../components/InputForm";

const Home = () => {
  return (
    <div className="w-full flex flex-col mt-[80px] pb-[50px]">
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
      <div className="w-full h-full relative top-[-100px] z-[900] ">
        <div className=" w-[450px] h-full ml-[12rem] ">
          <div className="bg-[#0492c2] p-[10px] rounded-lg box-border">
            <InputForm sellerId={1} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center space-x-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="w-full flex justify-center items-center mb-4 ">
        <span className="italic font-bold text-blue-600 text-xl">
          “Testimonial Quote . . . . . Tiffany to provide“
        </span>
      </div>
      <div className="flex items-start w-full h-[400px] relative">
        <div className="z-0 w-[50%] h-[400px] bg-slate-500"></div>
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
  );
};

export default Home;
