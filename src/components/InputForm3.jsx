import React, { useEffect, useMemo, useState } from "react";
import TextBlock from "./TextBlock";
import { useAppStore } from "../lib/store";
import { submitStep3 } from "../lib/step3";
import { LoadingButton } from "@mui/lab";

const InputForm3 = ({ companyid, showonlyData }) => {
  const {
    step2Data,
    setstep3Data,
    setAdditionalOptions,
    additionalOptions,
    incrementStep,
    error,
    setError,
  } = useAppStore();
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const initialData = useMemo(() => step2Data || {}, [step2Data]);
  const [formData, setFormData] = useState({
    LeadID: initialData.RateQuoted?.[0]?.LeadID || "",
    RateQuoted: initialData.RateQuoted?.[0]?.RateQuote || "",
    Options: additionalOptions,
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
    // console.log(formData);
    const selectedOptions = additionalOptions.filter(
      (option) => option?.selected
    );
    // console.log(selectedOptions);
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
    console.log("Data to submit: ", dataToSubmit);
    // setLoading(false);
    try {
      const response = await submitStep3(dataToSubmit);
      console.log(response);
      // setAdditionalOptions(selectedData.filter((data) => data.selected));
      incrementStep();
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
      Options: additionalOptions,
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
      additionalOptions.reduce(
        (acc, option) => acc + (option?.selected ? option?.ReserveAmount : 0),
        0
      );
    setFormData((prevData) => ({ ...prevData, Total: total }));
  }, [additionalOptions, formData.RateQuoted]);
  // console.log(selectedData);

  return (
    <div className="flex justify-center transition-all items-center box-border w-full h-full text-white">
      <div className="bg-[#2E7EB5] w-full h-full flex items-start justify-start max-w-[400px] rounded-md box-border px-2 py-1">
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <h3 className="font-bold text-xl sm:text-3xl subheading">
            Your Custom Plan
          </h3>
          <div className="grid grid-cols-2 w-full gap-2">
            <div className="text-white text-lg sm:text-xl  ">
              <TextBlock section="inputForm3" element="baseWarrantyRate" />
            </div>
            <div className="text-end text-lg sm:text-xl">
              $ {formData.RateQuoted.toFixed(2)}
            </div>
            <div className="text-white text-lg sm:text-xl">
              <TextBlock section="inputForm3" element="additionaloptions" />
            </div>
            <div className="text-end text-lg sm:text-xl">
              ${" "}
              {(
                formData.Total.toFixed(2) - formData.RateQuoted.toFixed(2)
              ).toFixed(2)}
            </div>
            {showonlyData && (
              <div className="w-full flex flex-col col-span-2  gap-2">
                {additionalOptions
                  .filter((data) => data.selected)
                  .map((data) => (
                    <div
                      key={data.ReserveId}
                      className="grid grid-cols-3  rounded-full p-2 bg-[#63A8AE] text-white text-base"
                    >
                      <div className="col-span-2">
                        {data.ReserveDescription}
                      </div>
                      <div className="text-end">
                        $ {data.ReserveAmount.toFixed(2)}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <h4 className="font-bold text-xl sm:text-3xl subheading">
            Your Price
          </h4>
          <div className="grid grid-cols-2 w-full gap-2">
            <div className="text-white text-lg sm:text-xl">
              <TextBlock section="inputForm3" element="total" />
            </div>
            <div className="text-end text-xl">
              {" "}
              $ {formData.Total.toFixed(2)}
            </div>
          </div>
          {!showonlyData && (
            <div className="flex w-full justify-center text-white mt-[5%]">
              <LoadingButton
                loading={loading}
                variant="contained"
                type="submit"
                className="!bg-[#63A8AE] w-[150px] text-white border-none py-[10px] px-[20px] rounded cursor-pointer transition-all "
              >
                <TextBlock section="inputForm3" element="submit" />
              </LoadingButton>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default InputForm3;
