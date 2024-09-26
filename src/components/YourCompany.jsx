import React, { useEffect, useState } from "react";
import { useAppStore } from "../lib/store";
import PremiumHomeText2 from "./PremiumHomeText2";
import MarqueeComponent from "./MarqueeComponent";
import TextBlock from "./TextBlock";
import PremiumProductText from "./PremiumProductText";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import PremiumHomeText from "./PremiumHomeText";
import InputForm from "./InputForm";
import FAQ from "../pages/FAQ/FAQ";

const YourCompany = () => {
  const { language, companydata, setCompanyData, setSellerid, clearData } =
    useAppStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [error, setError] = useState(null);
  // const [companydata,setCompanydata] = useState(null)
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

    {
      title: "Washer",
      averageRepairCost: "$285",
      averageReplaceCost: "$650",
    },
    {
      title: "Oven",
      averageRepairCost: "$285",
      averageReplaceCost: "$900",
    },
  ];
  useEffect(() => {
    if (!fadeOut) {
      const timeout = setTimeout(() => {
        setAnimating(false);
      }, 500); // Duration of the transition should match this timeout
      return () => clearTimeout(timeout);
    }
  }, [fadeOut]);

  const testimonialsEn = [
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
        "I am a single mother, and my garage door would not open with my car stuck in the garage. I called Diamond Home Protection and they had someone come out the next morning. The technician replaced the wire that went from the opener to the keypad. The technician was very prompt and friendly. I would recommend Diamond Home Protection.",
      name: "Barbara M., North Dakota",
    },
  ];

  const testimonialsEs = [
    {
      message:
        "Mi refrigerador dejó de funcionar y no se mantenía frío. Llamé a Diamond Home Protection y un caballero rápidamente hizo que alguien viniera y reemplazara la pieza. Todos, desde el servicio al cliente hasta el técnico de reparación, eran muy conocedores y amigables.",
      name: "Christina G., Arkansas",
    },
    {
      message:
        "Llamé a Diamond Home debido a que mi aire acondicionado no enfriaba correctamente. En un día, tuvieron un técnico de reparación que me informó que necesitábamos un condensador nuevo. La pieza fue ordenada y reemplazada 24 horas después. Los recomendaría a todos mis amigos y familiares.",
      name: "Jason Z., Texas",
    },
    {
      message:
        "Mi sistema de aspiración central no encendía. Diamond Home envió un técnico para revisarlo. El técnico me informó que necesitábamos un motor nuevo, y tenía uno en el camión para reemplazarlo de inmediato. El servicio que recibí fue superior a todo lo que había experimentado en el pasado con otras compañías.",
      name: "Andrew S., New Hampshire",
    },
    {
      message:
        "Soy madre soltera y mi puerta del garaje no se abría con mi coche atrapado dentro. Llamé a Diamond Home Protection y enviaron a alguien a la mañana siguiente. El técnico reemplazó el cable que iba del abridor al teclado. El técnico fue muy puntual y amable. Recomendaría Diamond Home Protection.",
      name: "Barbara M., North Dakota",
    },
  ];

  const [testimonials, setTestimonials] = useState(testimonialsEn);

  useEffect(() => {
    setTestimonials(language === "es" ? testimonialsEs : testimonialsEn);
  }, [language]);
  const scrolltoContainer = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };
  useEffect(() => {
    scrolltoContainer();
    clearData();
  }, []);
  return (
    <div className=" w-full transition-all flex flex-col mt-[100px] pb-[50px]">
      <div className="">
        <MarqueeComponent />
      </div>
      <div className="flex items-start w-full h-full">
        <div className="z-0 w-[50%]  h-[400px]">
          {/* <ImageSlider /> */}
          <img
            src="Worry-Free Warranty (DHP Page1).png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="z-10 h-[400px] flex-grow bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex items-center">
          <div
            className="cutBox bg-gradient-to-r from-[#63A8AE] to-[#5fa4af] h-full"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
              width: "calc(30% )", // Expand the width to cover the extra clipped area
              marginLeft: "-10%", // Shift the div to the left by the amount that was clipped
            }}
          ></div>
          <div className="w-full text-white mr-[50px]">
            <PremiumHomeText />
          </div>
        </div>
      </div>
      <div className="w-full h-[450px] flex relative top-[-100px] z-[900] ">
        <div className=" w-[450px] h-full ml-[10rem] ">
          <div className="bg-[#2E7EB5] p-[10px] rounded-lg box-border">
            <InputForm companyid={"yourcompany"} />
          </div>
        </div>
        <div className="w-full h-full flex justify-evenly space-x-5 mt-5  items-center">
          <img src={"gallagerlogo.jpg"} alt="" className=" w-48 " />
          {/* <div className="text-2xl font-bold">{companyData.name}</div> */}
          <div className="text-2xl font-semibold 2xl:max-w-[50%] mx-auto max-w-[90%] text-justify">
            {" "}
            We have some fantastic news to share! At{" "}
            <span className="font-bold text-teal-500">Your Company</span> we are
            committed to supporting not just your career but also your personal
            life. We are thrilled to announce that we have added a new voluntary
            benefit to your package – Diamond Home Protection’s Home Warranty
            Service
          </div>
        </div>
      </div>

      <div className="w-full flex h-40 justify-center mb-8 bg-gray-300 py-4">
        <div className="w-[90%] h-full flex items-center justify-around">
          <div
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-[#2E7Eb5] flex items-center justify-center cursor-pointer"
          >
            <ChevronLeftIcon className="text-gray-300" />
          </div>
          <div
            className={` w-[80%] rounded-xl h-[60%] flex flex-col justify-center items-center p-8 transition-opacity duration-500 ease-in-out transform ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-lg text-[#2E7Eb5] text-center mb-4">
              {testimonials[currentIndex].message} -{" "}
              <span className="font-bold">
                {testimonials[currentIndex].name}
              </span>
            </p>
          </div>
          <div
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#2E7Eb5] flex items-center justify-center cursor-pointer"
          >
            <ChevronRightIcon className="text-gray-300" />
          </div>
        </div>
      </div>
      <div className="md:w-full lg:w-[90%] xl:[w-80%] mx-auto flex flex-col items-center gap-10 mb-8">
        <span className="w-full text-center font-bold text-[#2E7Eb5] text-3xl">
          How it works... Easy as 1, 2, 3
        </span>
        <video
          src="30 second customer video_2.mp4"
          controls
          className="w-[70vw] h-[70vh] rounded-xl"
        ></video>
        <div className="flex items-center justify-center gap-6 font-bold text-[#2E7Eb5] text-2xl">
          <span>1. You Report A Claim 24/7</span>
          <span>2. We Assign A Professional</span>
          <span>3. The Repair is Complete</span>
        </div>
      </div>

      <div className="flex items-start w-full h-full">
        <div className="z-0 md:w-full lg:w-[80%] h-[400px]">
          <img
            src="/56ebb5e051381fbf99398cea78a84b36_1200_80.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="z-10 h-[400px] flex-grow bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex items-center">
          <div
            className="cutBox bg-gradient-to-r from-[#63A8AE] to-[#5fa4af] h-full"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
              width: "calc(30% )", // Expand the width to cover the extra clipped area
              marginLeft: "-10%", // Shift the div to the left by the amount that was clipped
            }}
          ></div>
          <div className="w-full text-white mr-[70px]">
            {/* <PremiumHomeText /> */}
            <PremiumProductText />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center p-10 gap-2">
        <div className="subheading text-xl !font-bold">
          <TextBlock section="homeInfoText" element="whatishomedaimond" />
        </div>
        <div className="text-lg">
          <TextBlock section="homeInfoText" element="whatishomedaimondtext1" />
        </div>
        <div className="text-lg">
          <TextBlock section="homeInfoText" element="whatishomedaimondtext2" />
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

      <div className="mb-8">
        <MarqueeComponent />
      </div>
      <FAQ />
      <div className="flex items-start w-full h-[400px] relative">
        <div className="z-0 w-[70%] h-[400px] bg-white">
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
              marginLeft: "-10%", // Shift the div to the left by the amount that was clipped
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

export default YourCompany;
