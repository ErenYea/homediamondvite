import React from "react";
import TextBlock from "./TextBlock";
import { CheckIcon } from "@heroicons/react/16/solid";

const PremiumCoverage = () => {
  const options = [
    "plumbingSystem",
    "electricalSystem",
    "centralHeating",
    "centralAir",
    "kitchenAppliances",
    "hotWaterHeater",
  ];
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h2 className="text-lg lg:text-xl xl:text-2xl text-[#2E7EB5] subheading ">
        <TextBlock section="premiumCoverage" element="title" />
      </h2>
      <div className="flex flex-col gap-1">
        {options.map((option, ind) => (
          <div key={ind} className="flex items-center gap-4 lg:gap-5 ">
            <CheckIcon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
            <span className="text-lg font-semibold">
              <TextBlock section="premiumCoverage" element={`${option}`} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumCoverage;
