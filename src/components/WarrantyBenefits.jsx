import React from "react";
import TextBlock from "./TextBlock";

const WarrantyBenefits = () => {
  return (
    <div className="text-white ">
      <h2 className="mb-[10px] text-2xl font-bold ">
        <TextBlock section="warrantyBenefits" element="title" />
      </h2>
      <ul className="pl-[20px] list-disc">
        <li className="mb-[5px]">
          <TextBlock section="warrantyBenefits" element="financialProtection" />
        </li>
        <li className="mb-[5px]">
          <TextBlock
            section="warrantyBenefits"
            element="comprehensiveCoverage"
          />
        </li>
        <li className="mb-[5px]">
          <TextBlock section="warrantyBenefits" element="costSavings" />
        </li>
        <li className="mb-[5px]">
          <TextBlock section="warrantyBenefits" element="convenience" />
        </li>
        <li className="mb-[5px]">
          <TextBlock section="warrantyBenefits" element="increasedHomeValue" />
        </li>
      </ul>
    </div>
  );
};

export default WarrantyBenefits;
