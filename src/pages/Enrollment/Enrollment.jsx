import React, { useEffect, useState } from "react";
import { useAppStore } from "../../lib/store";
import ProgressBar from "../../components/ProgressBar";
import InputForm from "../../components/InputForm";
import InputForm2 from "../../components/InputForm2";
import InputForm3 from "../../components/InputForm3";
import WarrantyBenefits from "../../components/WarrantyBenefits";
import PremiumCoverage from "../../components/PremiumCoverage";
import { useNavigate, useParams } from "react-router-dom";
import InputForm4 from "../../components/InputForm4";
import ProcessCompleted from "../../components/ProcessCompleted";
import OptionsCheckBoxContainer from "../../components/OptionsCheckBoxContainer";
import TextBlock from "../../components/TextBlock";
import ProgressComplete from "../../components/ProgressComplete";
import PremiumHomeText2 from "../../components/PremiumHomeText2";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const Enrollment = () => {
  const { language } = useAppStore();
  // const [currentIndex, setCurrentIndex] = useState(0);
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
  const scrolltoContainer = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };
  useEffect(() => {
    scrolltoContainer();
  }, []);
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

  const params = useParams();
  const {
    step1Data,
    step2Data,
    step3Data,
    step4Data,
    additionalOptions,
    setAdditionalOptions,
    currentStep
  } = useAppStore();

  useEffect(() => {
    if (additionalOptions.length == 0) {
      setAdditionalOptions(
        step2Data
          ? step2Data.Options?.map((option) => ({
              ...option,
              selected: false,
            })) || []
          : []
      );
    }
  }, [step2Data]);
  const navigate = useNavigate();
  // console.log(step1Data);
  // const currentStep = 3;
  // const currentStep = step4Data
  //   ? 5
  //   : step3Data
  //   ? 4
  //   : step2Data
  //   ? 3
  //   : step1Data
  //   ? 2
  //   : 1;

  const gotoContact = () => {
    navigate("/contact-us");
  };
  useEffect(() => {
    if (currentStep == 1) {
      if (params?.id) {
        navigate(`/${params.id}`);
      } else {
        navigate("/");
      }
    }
    // if (currentStep >= 3) {
    //   setFormData(
    //     step2Data.Options?.map((option) => ({
    //       ...option,
    //       selected: false,
    //     }))
    //   );
    // }
  }, [currentStep]);

  return (
    <div className="flex flex-col items-center mt-[100px] transition-all overflow-x-hidden right-[1%] pb-[50px]">
      <div className="bg-[#63A8AE] text-white transition-all font-semibold text-xl lg:text-2xl w-full text-center py-2 subheading">
        <TextBlock section="progressBanner" element={`step${currentStep}`} />
      </div>
      <div className="w-[50%] transition-all">
        <ProgressBar step={currentStep} /> {/* Pass currentStep directly */}
      </div>

      <div
        className={`grid transition-all ${
          currentStep !== 3 && currentStep !== 4
            ? "grid-cols-[2fr_3fr]"
            : "grid-cols-[2fr_3fr_2fr]"
        }  gap-4 w-[80%] h-full `}
      >
        <div className="flex justify-center transition-all items-start  text-black">
          {currentStep === 2 && <WarrantyBenefits />}
          {currentStep === 3 && <PremiumCoverage />}
          {currentStep === 5 && <ProgressComplete />}
          {currentStep === 4 && (
            <div className="h-full">
              <img
                src="/df5f93dbb6efd678934806a81895e925_1200_80.webp"
                alt=""
                className="h-full object-cover"
              />
            </div>
          )}
        </div>
        {currentStep === 3 && (
          <div className="flex justify-center transition-all items-start  text-black">
            <OptionsCheckBoxContainer />
          </div>
        )}
        <div
          className={`flex flex-col  items-center transition-all h-full w-full mt-[5px]  ${
            currentStep == 3 ? "justify-center pt-[30px]" : "justify-start"
          }`}
        >
          {currentStep === 1 && (
            <InputForm sellerId={1} companyid={params?.id} />
          )}
          {currentStep === 2 && <InputForm2 companyid={params?.id} />}
          {currentStep === 3 && <InputForm3 companyid={params?.id} />}
          {currentStep === 4 && <InputForm4 companyid={params?.id} />}
          {currentStep === 5 && <ProcessCompleted companyid={params?.id} />}
        </div>
        <div>
          {currentStep == 4 && (
            <InputForm3 companyid={params?.id} showonlyData={true} />
          )}
        </div>
      </div>
      <div className="flex justify-center h-full gap-5  w-full items-start pt-[30px] flex-col">
        <div className="bg-[#63A8AE] text-white transition-all font-semibold text-xl lg:text-2xl w-full text-center py-2 subheading">
          <TextBlock section="enrollementpage" element={`question`} />
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
                onClick={gotoContact}
                className="flex justify-center bg-[#63A8AE] items-center py-2 px-6 text-2xl cursor-pointer  transition-all   rounded-lg shadow-md border text-white"
              >
                Contact Us
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
    </div>
  );
};

export default Enrollment;
