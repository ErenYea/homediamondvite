import React, { useEffect, useState } from "react";
import TextBlock from "./TextBlock";

const OptionsCheckBoxContainer = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage
    const step2Data = JSON.parse(localStorage.getItem("step2Data"));

    if (step2Data && step2Data.Options) {
      setOptions(step2Data.Options);
    }
  }, []);

  const handleCheckboxChange = (event, optionId) => {
    // Handle checkbox change
    // event.target.checked will be true or false depending on the checkbox state
    console.log(
      `Option ${optionId} is ${event.target.checked ? "checked" : "unchecked"}`
    );
  };

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h2 className="text-lg lg:text-xl xl:text-2xl text-blue-600 ">
        <TextBlock section="checkboxContainer" element="title" />
      </h2>
      <div className="flex flex-col gap-1">
        {options.map((option) => (
          <div key={option.ReserveId} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`option-${option.ReserveId}`}
              defaultChecked={option.ReserveAmount > 0} // Check if ReserveAmount is greater than 0 to set the default state
              onChange={(event) =>
                handleCheckboxChange(event, option.ReserveId)
              }
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <label
              htmlFor={`option-${option.ReserveId}`}
              className="text-gray-700"
            >
              {option.ReserveDescription}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsCheckBoxContainer;
