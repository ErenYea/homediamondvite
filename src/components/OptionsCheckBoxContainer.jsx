import React, { useEffect, useState } from "react";
import TextBlock from "./TextBlock";
import { useAppStore } from "../lib/store";

const OptionsCheckBoxContainer = ({ setFormData, formData }) => {
  const { step2Data } = useAppStore();
  const handleCheckboxChange = (event, optionId) => {
    // Handle checkbox change
    // event.target.checked will be true or false depending on the checkbox state
    console.log(
      `Option ${optionId} is ${event.target.checked ? "checked" : "unchecked"}`
    );
    const newOptions = [...formData];
    newOptions[optionId].selected = !newOptions[optionId].selected;
    setFormData(newOptions);
  };

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h2 className="text-lg lg:text-xl xl:text-2xl text-[#2E7EB5] subheading text-wrap ">
        <TextBlock section="checkboxContainer" element="title" />
      </h2>
      <div className="flex flex-col gap-1">
        {formData.map((option, index) => (
          <div key={index} className=" gap-5 w-full grid grid-cols-2">
            <div className="flex items-center space-x-2">
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

            <div className="text-gray-700">${option.ReserveAmount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsCheckBoxContainer;
