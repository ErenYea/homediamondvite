import React, { useEffect, useState } from "react";
import MarqueeComponent from "../../components/MarqueeComponent";
import ImageSlider from "../../components/ImageSlider";

import PremiumHomeText2 from "../../components/PremiumHomeText2";
import TextBlock from "../../components/TextBlock";
import PremiumProductText from "../../components/PremiumProductText";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handlePrev = () => {
    if (animating) return;
    setFadeOut(true);
    setAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFadeOut(false);
    }, 500); // Match this with the CSS transition duration
  };

  const handleNext = () => {
    if (animating) return;
    setFadeOut(true);
    setAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setFadeOut(false);
    }, 500); // Match this with the CSS transition duration
  };

  useEffect(() => {
    if (!fadeOut) {
      const timeout = setTimeout(() => {
        setAnimating(false);
      }, 500); // Duration of the transition should match this timeout
      return () => clearTimeout(timeout);
    }
  }, [fadeOut]);

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

  const testimonials = [
    {
      message:
        "My Refrigerator stopped working and would not stay cold. I called Diamond Home Protection and a gentleman quickly had someone come out and replaced the part. Everyone from customer service to the service repair technician was very knowledgeable and friendly.",
      name: "Christina G., Arkansas",
    },
    {
      message:
        "I call Diamond Home due to my air conditioner not cooling properly. Within one day they had a service repair technician come out to let me know that we needed a new condenser. The part was ordered and replaced 24 hours later. I would recommend them to all my friends and family.",
      name: "Jason Z., Texas",
    },
    {
      message:
        "My Central Vacuum system would not turn on. I had Diamond Home have a service technician come out and look at it. The technician let me know that we needed a new motor, and he had one on the truck to replace immediately. The service I received was above and beyond anything I had experienced in the past with other companies.",
      name: "Andrew S., New Hampshire",
    },
    {
      message:
        "I am a single mother, and my garage door would not open with my car stuck in the garage. I called Diamond Home Protection and they had someone come out the next morning. The technician replaced the wire that went from the opener to the keypad.   The technician was very prompt and friendly. I would recommend Diamond Home Protection.",
      name: "Barbara M., North Dakota",
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
        <div className="z-10 h-[400px] flex-grow bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex items-center">
          <div
            className="cutBox bg-gradient-to-r from-[#63A8AE] to-[#5fa4af] h-full"
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
              className="col-span-1 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-white to-[#63A8AE] py-6 w-fit px-6 min-w-[500px] min-h-[200px] subheading "
            >
              <span className="font-bold text-xl tracking-wide leading-normal">{`${product.title}`}</span>
              <span className="text-lg font-medium leading-normal">{`Avg. repair cost: ${product.averageRepairCost}`}</span>
              <span className="text-lg font-medium leading-normal">{`Avg. replace cost: ${product.averageReplaceCost}`}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex h-[500px] justify-center">
        <div className="w-[60%] h-full bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex items-center justify-around">
          <div
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer"
          >
            <ChevronLeftIcon className="text-[#2E7Eb5]" />
          </div>
          <div
            className={`bg-white w-[60%] rounded-xl h-[60%] flex flex-col justify-center items-center p-8 transition-opacity duration-500 ease-in-out transform ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-lg text-gray-700 text-center mb-4">
              {testimonials[currentIndex].message}
            </p>
            <p className="text-base text-gray-500 text-center subheading">
              - {testimonials[currentIndex].name}
            </p>
          </div>
          <div
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer"
          >
            <ChevronRightIcon className="text-[#2E7Eb5]" />
          </div>
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
              className="flex justify-center !bg-[#63A8AE] items-center py-2 px-6 text-2xl cursor-pointer  transition-all   rounded-lg shadow-md border text-white"
            >
              Free Quote
            </div>
          </div>
        </div>
        <div className=" z-10 h-full flex-grow bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex items-center">
          <div
            className="cutBox bg-gradient-to-r from-[#63A8AE] to-[#5fa4af] h-full"
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
