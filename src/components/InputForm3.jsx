import React, { useEffect, useMemo, useState } from "react";
import TextBlock from "./TextBlock";
import { useAppStore } from "../lib/store";
import { submitStep3 } from "../lib/step3";
import { LoadingButton } from "@mui/lab";

const InputForm3 = ({ selectedData, setSelectedData, companyid }) => {
  const { step2Data, setstep3Data } = useAppStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const initialData = useMemo(() => step2Data || {}, [step2Data]);
  const [formData, setFormData] = useState({
    LeadID: initialData.RateQuoted?.[0]?.LeadID || "",
    RateQuoted: initialData.RateQuoted?.[0]?.RateQuote || "",
    Options: selectedData,
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
    setLoading(true);
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
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting Step 3:", error);
      setError(error);
    }
  };

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      LeadID: initialData.RateQuoted?.[0]?.LeadID || "",
      RateQuoted: initialData.RateQuoted?.[0]?.RateQuote || "",
      Options: selectedData,
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
      selectedData.reduce(
        (acc, option) => acc + (option?.selected ? option?.ReserveAmount : 0),
        0
      );
    setFormData((prevData) => ({ ...prevData, Total: total }));
  }, [selectedData, formData.RateQuoted]);

  if (error) {
    throw error;
  }

  return (
    <div className="flex justify-center transition-all items-center box-border w-full h-full text-white">
      <div className="bg-[#0492c2] w-full h-full flex items-start justify-start max-w-[400px] rounded-md box-border px-2 py-1">
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <h3 className="font-bold text-3xl">Your Custom Plan</h3>
          <div className="grid grid-cols-2 w-full gap-2">
            <div className="text-white text-xl ">
              <TextBlock section="inputForm3" element="baseWarrantyRate" />
            </div>
            <div className="text-end text-xl">
              $ {formData.RateQuoted.toFixed(2)}
            </div>
            <div className="text-white text-xl">
              <TextBlock section="inputForm3" element="additionaloptions" />
            </div>
            <div className="text-end text-xl">
              ${" "}
              {(
                formData.Total.toFixed(2) - formData.RateQuoted.toFixed(2)
              ).toFixed(2)}
            </div>
          </div>
          <h4 className="font-bold text-3xl">Your Price</h4>
          <div className="grid grid-cols-2 w-full gap-2">
            <div className="text-white text-xl">
              <TextBlock section="inputForm3" element="total" />
            </div>
            <div className="text-end text-xl">
              {" "}
              $ {formData.Total.toFixed(2)}
            </div>
          </div>
          <div className="flex w-full justify-center text-white mt-[5%]">
            <LoadingButton
              loading={loading}
              variant="contained"
              type="submit"
              className="bg-[#7ec8e3] w-[150px] text-white border-none py-[10px] px-[20px] rounded cursor-pointer transition-all hover:bg-[#0056b3]"
            >
              <TextBlock section="inputForm3" element="submit" />
            </LoadingButton>
            {/* <button
              type="submit"
              className="bg-[#7ec8e3] text-white border-none py-[10px] px-[20px] transition-all rounded cursor-pointer hover:bg-[#0056b3]"
            >
              <TextBlock section="inputForm3" element="submit" />
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm3;
