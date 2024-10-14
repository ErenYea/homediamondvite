import React from "react";
import TextBlock from "./TextBlock";

const PremiumHomeText = () => {
  return (
    <div className="flex flex-col xl:gap-6 lg:gap-4 gap-2 w-full">
      <div className="sm:max-w-[80%] w-full">
        <span className=" font-extrabold xl:text-4xl text-xl sm:text-3xl xl:leading-normal subheading leading-snug tracking-wide heading-times-bold-uppercase">
          <TextBlock section="homeInfoText" element="mainHomePageHeading" />
        </span>
      </div>

      <div className="flex flex-col xl:gap-4 lg:gap-2 gap-1">
        <div className="max-w-[80%]">
          <span className="xl:text-xl text-lg font-bold italic">
            <TextBlock section="homeInfoText" element="mainHomePageParagraph" />
          </span>
        </div>

        <ul className="list-disc ml-6 xl:text-xl text-lg font-light">
          <li className="ml-4">
            <TextBlock
              section="homeInfoText"
              element="mainHomePageFirstBullet"
            />
          </li>
          <li className="ml-4">
            <TextBlock
              section="homeInfoText"
              element="mainHomePageSecondBullet"
            />
          </li>
          <li className="ml-4">
            <TextBlock
              section="homeInfoText"
              element="mainHomePageThirdBullet"
            />
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

export default PremiumHomeText;
