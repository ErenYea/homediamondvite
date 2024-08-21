import React from "react";
import TextBlock from "../../components/TextBlock";
import ContactUsForm from "../../components/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="mt-[80px] pb-[50px] text-black h-full">
      <div className="flex items-start w-full h-full relative">
        <div className="z-0 w-[50%]  h-[80%]">
          <div className="w-full h-full">
            <div className="flex flex-col justify-center h-full w-fit mx-auto md:ml-[10%] lg:pl-0 pr-[20%]">
              <span className="font-extrabold xl:text-4xl text-3xl xl:leading-normal leading-snug tracking-wide capitalize">
                <TextBlock section="contactUsPage" element="contactUsHeading" />
              </span>

              <span className="xl:text-xl text-lg italic">
                <TextBlock
                  section="contactUsPage"
                  element="contactUsParagraph"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="relative z-10 h-[80%] flex-grow bg-teal-500 flex items-center">
          <div
            className="cutBox bg-teal-500 h-full"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
              width: "calc(70% + 30%)", // Expand the width to cover the extra clipped area
              marginLeft: "-30%", // Shift the div to the left by the amount that was clipped
            }}
          ></div>
          <div className="w-full absolute h-full flex items-center justify-center lg:left-0">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
