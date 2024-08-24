import React, { useEffect } from "react";
import MarqueeComponent from "../../components/MarqueeComponent";
import ImageSlider from "../../components/ImageSlider";

import PremiumHomeText2 from "../../components/PremiumHomeText2";
import TextBlock from "../../components/TextBlock";
import PremiumProductText from "../../components/PremiumProductText";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const scrolltoContainer = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };
  const products = [
    {
      title: "Plumbing System",
      averageRepairCost: "$300",
      averageReplaceCost: "$3500",
    },
    {
      title: "AC, Average Repair",
      averageRepairCost: "$350",
      averageReplaceCost: "$5500",
    },
    {
      title: "Heat",
      averageRepairCost: "$350",
      averageReplaceCost: "$4500",
    },
    {
      title: "Water Heater",
      averageRepairCost: "$275",
      averageReplaceCost: "$1500",
    },
  ];
  const gotohome = () => {
    navigate("/");
  };
  useEffect(() => {
    scrolltoContainer();
  }, []);
  return (
    <div className="w-full flex flex-col mt-[100px] pb-[50px]">
      <div className="">
        <MarqueeComponent />
      </div>
      <div className="flex items-start w-full h-full">
        <div className="z-0 md:w-full lg:w-[80%] h-[400px]">
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
            {/* <PremiumHomeText /> */}
            <PremiumProductText />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center p-10">
        <div className="grid grid-cols-2 gap-4 w-fit">
          {products.map((product, ind) => (
            <div
              key={ind}
              className="col-span-1 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-white to-[#63A8AE] py-6 w-fit px-6 min-w-[500px] min-h-[200px]"
            >
              <span className="font-bold text-xl tracking-wide leading-normal">{`${product.title}`}</span>
              <span className="text-lg font-medium leading-normal">{`Avg. repair cost: ${product.averageRepairCost}`}</span>
              <span className="text-lg font-medium leading-normal">{`Avg. replace cost: ${product.averageReplaceCost}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="italic font-bold text-blue-600 text-xl w-full text-center mb-4">
        <span>“</span>
        <TextBlock section="enrollementpage" element={`quote`} />
        <span>“</span>
      </div>
      <div className="flex items-start w-full h-[400px] relative">
        <div className="z-0 w-[50%] h-[400px] bg-white">
          <div className="w-full h-full flex flex-col pt-6 items-center">
            <img src="/dhp_home_logo.jpg" alt="" className="w-[350px]" />
            <div
              onClick={gotohome}
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
            <PremiumHomeText2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
