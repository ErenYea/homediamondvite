import React, { useEffect, useState } from "react";
import TextBlock from "./TextBlock";
import { useAppStore } from "../lib/store";

const OptionsCheckBoxContainer = () => {
  const { setAdditionalOptions, additionalOptions } = useAppStore();
  const handleCheckboxChange = (event, optionId) => {
    // Handle checkbox change
    // event.target.checked will be true or false depending on the checkbox state
    // console.log(
    //   `Option ${optionId} is ${event.target.checked ? "checked" : "unchecked"}`
    // );
    const newOptions = [...additionalOptions];
    newOptions[optionId].selected = !newOptions[optionId].selected;
    setAdditionalOptions(newOptions);
  };

  return (
    <div className="flex flex-col w-full gap-2 md:gap-4">
      <h2 className="text-lg lg:text-xl xl:text-2xl text-[#2E7EB5] subheading text-wrap ">
        <TextBlock section="checkboxContainer" element="title" />
      </h2>
      <div className="flex flex-col gap-1">
        {additionalOptions.map((option, index) => (
          <div key={index} className=" gap-5 w-full flex flex-row">
            <div className="flex flex-1 items-center space-x-2">
              <input
                type="checkbox"
                id={`option-${option.ReserveId}`}
                defaultChecked={false} // Check if ReserveAmount is greater than 0 to set the default state
                onChange={(event) => handleCheckboxChange(event, index)}
                checked={option.selected}
                style={{ accentColor: "#2E7EB5" }}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <label
                htmlFor={`option-${option.ReserveId}`}
                className="text-gray-700"
              >
                {option.ReserveDescription}
              </label>
            </div>

            <div className="text-gray-700">
              ${option.ReserveAmount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsCheckBoxContainer;
