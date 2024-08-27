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

const Enrollment = () => {
  const params = useParams();
  const { step1Data, step2Data, step3Data, step4Data } = useAppStore();
  const [formData, setFormData] = useState(
    step2Data
      ? step2Data.Options?.map((option) => ({
          ...option,
          selected: false,
        })) || []
      : []
  );
  const navigate = useNavigate();
  // console.log(step1Data);
  // const currentStep = 3;
  const currentStep = step4Data
    ? 5
    : step3Data
    ? 4
    : step2Data
    ? 3
    : step1Data
    ? 2
    : 1;

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
    if (currentStep >= 3) {
      setFormData(
        step2Data.Options?.map((option) => ({
          ...option,
          selected: false,
        }))
      );
    }
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
          currentStep !== 3 ? "grid-cols-[2fr_3fr]" : "grid-cols-[2fr_3fr_2fr]"
        }  gap-4 w-[80%] h-full `}
      >
        <div className="flex justify-center transition-all items-start  text-black">
          {currentStep === 2 && <WarrantyBenefits />}
          {currentStep === 3 && <PremiumCoverage />}
          {currentStep === 5 && <ProgressComplete />}
        </div>
        {currentStep === 3 && (
          <div className="flex justify-center transition-all items-start  text-black">
            <OptionsCheckBoxContainer
              setFormData={setFormData}
              formData={formData}
            />
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
          {currentStep === 3 && (
            <InputForm3
              setSelectedData={setFormData}
              selectedData={formData}
              companyid={params?.id}
            />
          )}
          {currentStep === 4 && <InputForm4 companyid={params?.id} />}
          {currentStep === 5 && <ProcessCompleted companyid={params?.id} />}
        </div>
      </div>
      <div className="flex justify-center h-full gap-5  w-full items-start pt-[30px] flex-col">
        <div className="bg-[#63A8AE] text-white transition-all font-semibold text-xl lg:text-2xl w-full text-center py-2 subheading">
          <TextBlock section="enrollementpage" element={`question`} />
        </div>

        <div className="italic font-bold text-[#2E7Eb5] text-xl w-full text-center">
          <span>“</span>
          <TextBlock section="enrollementpage" element={`quote`} />
          <span>“</span>
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
                marginLeft: "-20%", // Shift the div to the left by the amount that was clipped
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
