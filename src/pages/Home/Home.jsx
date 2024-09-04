import React, { useEffect, useState } from "react";
import MarqueeComponent from "../../components/MarqueeComponent";
import ImageSlider from "../../components/ImageSlider";
import PremiumHomeText from "../../components/PremiumHomeText";
import InputForm from "../../components/InputForm";
import { Outlet, useParams } from "react-router-dom";
import PremiumHomeText2 from "../../components/PremiumHomeText2";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useAppStore } from "../../lib/store";

const Home = () => {
  const { language } = useAppStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

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
            className="cutBox  h-full bg-gradient-to-r from-[#63A8AE] to-[#5fa4af]"
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
      <div className="w-full h-full relative top-[-60px] z-[900] flex items-center">
        <div className=" w-[450px] h-full ml-[10rem] ">
          <div className="bg-[#2E7EB5] p-[10px] rounded-lg box-border">
            <InputForm sellerId={1} />
          </div>
        </div>

        <div className="lg:w-[80%] w-[100%] xl:w-[60%] h-full bg-white flex items-center justify-around">
          <div
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-[#E7E6EA] flex items-center justify-center cursor-pointer"
          >
            <ChevronLeftIcon className="text-[#2E7Eb5]" />
          </div>
          <div
            className={`bg-gradient-to-r shadow-lg from-[#63A8AE] to-[#2E7Eb5] w-[60%] rounded-xl h-[60%] flex flex-col justify-center items-center p-8 transition-opacity duration-500 ease-in-out transform ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-lg text-[#E7E6EA] text-center mb-4">
              {testimonials[currentIndex].message}
            </p>
            <p className="text-base text-[#E7E6EA] text-center subheading">
              - {testimonials[currentIndex].name}
            </p>
          </div>
          <div
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#E7E6EA] flex items-center justify-center cursor-pointer"
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

export default Home;
