import React from "react";
import TextBlock from "./TextBlock";

const PremiumCoverage = () => {
  return (
    <div className="premium-coverage-container">
      <h2>
        <TextBlock section="premiumCoverage" element="title" />
      </h2>
      <ul className="premium-coverage-list">
        <li>
          <TextBlock section="premiumCoverage" element="plumbingSystem" />
        </li>
        <li>
          <TextBlock section="premiumCoverage" element="electricalSystem" />
        </li>
        <li>
          <TextBlock section="premiumCoverage" element="centralHeating" />
        </li>
        <li>
          <TextBlock section="premiumCoverage" element="centralAir" />
        </li>
        <li>
          <TextBlock section="premiumCoverage" element="kitchenAppliances" />
        </li>
        <li>
          <TextBlock section="premiumCoverage" element="hotWaterHeater" />
        </li>
      </ul>
    </div>
  );
};

export default PremiumCoverage;
