import React from "react";

const ProgressBar = ({ step }) => {
  const milestones = [
    "Personal Info",
    "Select Plan",
    "Billing Information",
    "Confirmation",
  ];

  return (
    <div className="transition-all">
      <div className="max-w-xl mx-auto my-4  pb-4 transition-all">
        <div className="flex pb-3 transition-all">
          <div className="flex-1"></div>

          <div className="flex-1">
            <div
              className={`w-10 h-10  mx-auto rounded-full text-lg text-white flex items-center ${
                step >= 2 ? "bg-[#2E7EB5]" : "bg-gray-300"
              }`}
            >
              <span className="text-white text-center w-full">
                <i className="fa fa-check w-full fill-current white"></i>
              </span>
            </div>
          </div>

          <div className="w-1/6 align-center items-center align-middle content-center flex">
            <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
              <div
                className="bg-[#2E7EB5] text-xs leading-none py-1 text-center text-grey-darkest rounded "
                style={{ width: step > 2 ? "100%" : "0%" }}
              ></div>
            </div>
          </div>

          <div className="flex-1">
            <div
              className={`w-10 h-10  mx-auto rounded-full text-lg text-white flex items-center ${
                step >= 3 ? "bg-[#2E7EB5]" : "bg-gray-300"
              }`}
            >
              <span className="text-white text-center w-full">
                <i className="fa fa-check w-full fill-current white"></i>
              </span>
            </div>
          </div>

          <div className="w-1/6 align-center items-center align-middle content-center flex">
            <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
              <div
                className="bg-[#2E7EB5] text-xs leading-none py-1 text-center text-grey-darkest rounded "
                style={{ width: step > 3 ? "100%" : "0%" }}
              ></div>
            </div>
          </div>

          <div className="flex-1">
            <div
              className={`w-10 h-10  mx-auto rounded-full text-lg text-white flex items-center ${
                step >= 4 ? "bg-[#2E7EB5]" : "bg-gray-300"
              }`}
            ></div>
          </div>

          <div className="w-1/6 align-center items-center align-middle content-center flex">
            <div className="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
              <div
                className="bg-[#2E7EB5] text-xs leading-none py-1 text-center text-grey-darkest rounded "
                style={{ width: step > 4 ? "100%" : "0%" }}
              ></div>
            </div>
          </div>

          <div className="flex-1">
            <div
              className={`w-10 h-10  mx-auto rounded-full text-lg text-white flex items-center ${
                step > 4 ? "bg-[#2E7EB5]" : "bg-gray-300"
              }`}
            ></div>
          </div>

          <div className="flex-1"></div>
        </div>

        <div className="flex text-sm content-center text-center">
          {milestones.map((text, index) => (
            <div className="w-1/4" key={index}>
              {text}
            </div>
          ))}
          {/* <div className="w-1/4">Invitation received</div>

          <div className="w-1/4">Personal details</div>

          <div className="w-1/4">Application details</div>

          <div className="w-1/4">Confirmation</div> */}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
