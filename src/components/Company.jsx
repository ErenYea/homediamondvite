import React, { useEffect, useMemo, useState } from "react";
import PremiumHomeText from "./PremiumHomeText";
import InputForm from "./InputForm";
import MarqueeComponent from "./MarqueeComponent";
import ImageSlider from "./ImageSlider";
import { useParams } from "react-router-dom";
import { companies } from "../lib/constant";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const Company = () => {
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
      <div className=" w-full transition-all flex flex-col mt-[100px] pb-[50px]">
        <div className="">
          <MarqueeComponent />
        </div>
        <div className="flex items-start w-full h-full">
          <div className="z-0 w-[50%]  h-[400px]">
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
              <PremiumHomeText />
            </div>
          </div>
        </div>
        <div className="w-full h-[450px] flex relative top-[-100px] z-[900] ">
          <div className=" w-[450px] h-full ml-[12rem] ">
            <div className="bg-[#2E7EB5] p-[10px] rounded-lg box-border">
              <InputForm sellerId={1} companyid={params.id} />
            </div>
          </div>
          <div className="w-full h-full flex justify-evenly space-x-5 mt-5  items-center">
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

        <div className="w-full flex h-[500px] justify-center mb-8">
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
              className="cutBox bg-gradient-to-r from-[#63A8AE] to-[#5fa4af] h-full"
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
