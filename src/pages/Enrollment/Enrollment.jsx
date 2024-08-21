import React, { useEffect } from "react";
import { useAppStore } from "../../lib/store";
import ProgressBar from "../../components/ProgressBar";
import InputForm from "../../components/InputForm";
import InputForm2 from "../../components/InputForm2";
import InputForm3 from "../../components/InputForm3";
import WarrantyBenefits from "../../components/WarrantyBenefits";
import PremiumCoverage from "../../components/PremiumCoverage";
import { useNavigate } from "react-router-dom";
import InputForm4 from "../../components/InputForm4";
import ProcessCompleted from "../../components/ProcessCompleted";
import OptionsCheckBoxContainer from "../../components/OptionsCheckBoxContainer";

const Enrollment = () => {
  const { step1Data, step2Data, step3Data, step4Data } = useAppStore();
  const navigate = useNavigate();
  console.log(step1Data);
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

  console.log(currentStep);
  useEffect(() => {
    if (currentStep == 1) {
      navigate("/");
    }
  }, [currentStep]);
  return (
    <div className="flex flex-col items-center mt-[80px] pt-[25px] overflow-x-hidden right-[1%]">
      <div className="w-[50%]">
        <ProgressBar step={currentStep} /> {/* Pass currentStep directly */}
      </div>

      <div
        className={`grid ${
          currentStep !== 3 ? "grid-cols-[2fr_3fr]" : "grid-cols-[2fr_3fr_2fr]"
        }  gap-4 w-[80%] h-full `}
      >
        <div className="flex justify-center items-start pt-[30px] text-black">
          {currentStep === 2 && <WarrantyBenefits />}
          {currentStep === 3 && <PremiumCoverage />}
        </div>
        {currentStep === 3 && (
          <div className="flex justify-center items-start pt-[30px] text-black">
            <OptionsCheckBoxContainer />
          </div>
        )}
        <div className="flex flex-col justify-start items-center h-full w-full mt-[5px]">
          {currentStep === 1 && <InputForm sellerId={1} />}
          {currentStep === 2 && <InputForm2 />}
          {currentStep === 3 && <InputForm3 />}
          {currentStep === 4 && <InputForm4 />}
          {currentStep === 5 && <ProcessCompleted />}
        </div>
        <div className="flex justify-center items-start pt-[30px] flex-col"></div>
      </div>
    </div>
  );
};

export default Enrollment;
