import React from "react";
import TextBlock from "./TextBlock";

const PremiumHomeText2 = () => {
  return (
    <div className="flex flex-col xl:gap-6 lg:gap-4 gap-2 ">
      <div className="lg:max-w-[80%] md:max-w-[90%] xl:max-w-[70%]">
        <span className=" font-extrabold xl:text-4xl text-3xl xl:leading-normal subheading leading-snug tracking-wide heading-times-bold-uppercase">
          <TextBlock section="premiumHomeText" element="title" />
        </span>
      </div>

      <div className="flex flex-col xl:gap-4 lg:gap-2 gap-1 lg:max-w-[80%] md:max-w-[90%] xl:max-w-[70%]">
        <ul className="list-disc ml-6 xl:text-xl text-lg font-light">
          <li className="ml-4">
            <TextBlock section="premiumHomeText" element="bbbRating" />
          </li>
          <li className="ml-4">
            <TextBlock section="premiumHomeText" element="licensedProvider" />
          </li>
          <li className="ml-4">
            <TextBlock section="premiumHomeText" element="customerService" />
          </li>
        </ul>
      </div>
    </div>
    // <div className="premium-home-text">
    //   <h2>
    //     <strong>
    //       <TextBlock section="premiumHomeText" element="title" />
    //     </strong>
    //   </h2>
    //   <ul>
    //     <li>
    //       <TextBlock section="premiumHomeText" element="bbbRating" />
    //     </li>
    //     <li>
    //       <TextBlock section="premiumHomeText" element="licensedProvider" />
    //     </li>
    //     <li>
    //       <TextBlock section="premiumHomeText" element="customerService" />
    //     </li>
    //   </ul>
    // </div>
  );
};

export default PremiumHomeText2;
