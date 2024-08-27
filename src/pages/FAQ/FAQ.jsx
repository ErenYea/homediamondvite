import React from "react";
import TextBlock from "../../components/TextBlock";

const FAQ = () => {
  return (
    <div className="mt-[100px] pb-[50px] text-black h-screen w-full flex justify-center items-center">
      <div className="flex flex-col h-fit gap-8">
        <span className="subheading text-[#2E7Eb5] !font-extrabold !text-3xl">
          <TextBlock section="faqPage" element="faqHeading" />
        </span>
        <div></div>
      </div>
    </div>
  );
};

export default FAQ;
