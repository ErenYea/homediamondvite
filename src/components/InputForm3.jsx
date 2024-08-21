import React, { useEffect, useMemo, useState } from "react";
import TextBlock from "./TextBlock";
import { useAppStore } from "../lib/store";
import { submitStep3 } from "../lib/step3";

const InputForm3 = () => {
  const { step2Data, setstep3Data } = useAppStore();
  const initialData = useMemo(() => step2Data || {}, [step2Data]);
  const [formData, setFormData] = useState({
    LeadID: initialData.RateQuoted?.[0]?.LeadID || "",
    RateQuoted: initialData.RateQuoted?.[0]?.RateQuote || "",
    Options:
      initialData.Options?.map((option) => ({
        ...option,
        selected: false,
      })) || [],
    Total:
      initialData.RateQuoted?.reduce((acc, curr) => acc + curr?.RateQuote, 0) ||
      0,
  });

  const handleOptionChange = (index) => {
    const newOptions = [...formData.Options];
    newOptions[index].selected = !newOptions[index].selected;
    setFormData((prevData) => ({ ...prevData, Options: newOptions }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedOptions = formData.Options.filter(
      (option) => option?.selected
    );

    const rateQuoted = [
      {
        LeadID: formData.LeadID,
        ReserveID: 44,
        RateQuoted: formData.RateQuoted,
      },
      ...selectedOptions.map((option) => ({
        LeadID: formData.LeadID,
        ReserveID: option?.ReserveId,
        RateQuoted: option?.ReserveAmount,
      })),
    ];

    const dataToSubmit = { RateQuoted: rateQuoted };

    try {
      const response = await submitStep3(dataToSubmit);
      setstep3Data({ ...response, totalAmount: formData.Total });
    } catch (error) {
      console.error("Error submitting Step 3:", error);
    }
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      LeadID: initialData.RateQuoted?.[0]?.LeadID || "",
      RateQuoted: initialData.RateQuoted?.[0]?.RateQuote || "",
      Options:
        initialData.Options?.map((option) => ({
          ...option,
          selected: false,
        })) || [],
      Total:
        initialData.RateQuoted?.reduce(
          (acc, curr) => acc + curr?.RateQuote,
          0
        ) || 0,
    }));
  }, [initialData]);

  useEffect(() => {
    const total =
      formData.RateQuoted +
      formData.Options.reduce(
        (acc, option) => acc + (option?.selected ? option?.ReserveAmount : 0),
        0
      );
    setFormData((prevData) => ({ ...prevData, Total: total }));
  }, [formData.Options, formData.RateQuoted]);

  return (
    <div className="flex justify-center items-center box-border w-full ">
      <div className="bg-[#0492c2] w-full max-w-[400px] rounded-md box-border px-2 py-1">
        <form onSubmit={handleSubmit}>
          <h3>
            <TextBlock section="inputForm3" element="baseWarrantyRate" />: $
            {formData.RateQuoted.toFixed(2)}
          </h3>
          <div className="form-grid">
            {formData.Options.map((option, index) => (
              <div className="form-group" key={option?.ReserveId}>
                <input
                  type="checkbox"
                  checked={option?.selected}
                  onChange={() => handleOptionChange(index)}
                />
                {option?.ReserveDescription} - $
                {option?.ReserveAmount.toFixed(2)}
              </div>
            ))}
          </div>
          <h4>
            <TextBlock section="inputForm3" element="total" />: $
            {formData.Total.toFixed(2)}
          </h4>
          <div className="flex justify-center text-white mt-[5%]">
            <button
              type="submit"
              className="bg-[#7ec8e3] text-white border-none py-[10px] px-[20px] rounded cursor-pointer hover:bg-[#0056b3]"
            >
              <TextBlock section="inputForm3" element="submit" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm3;
