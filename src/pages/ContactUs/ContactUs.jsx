import React, { useEffect } from "react";
import TextBlock from "../../components/TextBlock";
import ContactUsForm from "../../components/ContactUsForm";

const ContactUs = () => {
  const scrolltoContainer = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };
  useEffect(() => {
    scrolltoContainer();
  }, []);
  return (
    <div className="mt-[100px] pb-[50px] text-black h-full">
      <div className="bg-[#63A8AE]  text-white transition-all subheading font-semibold capitalize text-xl lg:text-2xl w-full text-center py-2 ">
        <TextBlock section="contactUsPage" element={`contactUsHeading`} />
      </div>
      <div className="flex flex-col sm:flex-row items-start w-full h-full relative">
        <div className="z-0 w-full sm:w-[50%]  h-fit sm:h-[80%]">
          <div className="w-full h-full">
            <div className="flex px-2 sm:px-0 flex-col justify-center sm:items-start items-center h-full w-full sm:w-fit mx-auto md:ml-[10%] lg:pl-0 sm:pr-[20%]">
              <span className="hidden sm:flex font-extrabold xl:text-4xl text-3xl xl:leading-normal leading-snug tracking-wide capitalize heading-times-bold-uppercase">
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
        <div className="relative w-full sm:w-fit z-10 sm:h-[80%] flex-grow bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex items-center">
          <div
            className="cutBox bg-gradient-to-r from-[#63A8AE] to-[#5fa4af] h-full"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
              width: "calc(30%)", // Expand the width to cover the extra clipped area
              marginLeft: "-10%", // Shift the div to the left by the amount that was clipped
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
