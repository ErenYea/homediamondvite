import React, { useState } from "react";
import TextBlock from "./TextBlock";
import { useAppStore } from "../lib/store";
import { states } from "../lib/constant";
import { submitStep4 } from "../lib/step4";
import { LoadingButton } from "@mui/lab";

const InputForm4 = ({ companyid }) => {
  const { step1Data, step3Data, setstep4Data } = useAppStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const customerIdObject = step1Data || {};
  const { LeadID, LeadUID } = customerIdObject;
  console.log(customerIdObject);
  const [billingData, setBillingData] = useState({
    BillingFirstName: "",
    BillingLastName: "",
    BillingAddress1: "",
    BillingAddress2: "",
    BillingCity: "",
    BillingZip: "",
    BillingPhone: "",
    BillingEmail: "",
    ccnumber: "4111111111111111",
    ccexp: "1212",
    cvv: "999",
    LeadID: LeadID,
    LeadUID: LeadUID,
    totalAmount: step3Data.totalAmount || -1,
    BillingStateID: 0,
    BillingStateAbbreviation: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingData({ ...billingData, [name]: value });
  };

  const handleStateChange = (e) => {
    const stateId = parseInt(e.target.value);
    const selectedState = states.find((state) => state.id === stateId);
    const stateAbbreviation = selectedState ? selectedState.abbreviation : "";
    setBillingData({
      ...billingData,
      BillingStateID: stateId,
      BillingStateAbbreviation: stateAbbreviation,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(billingData);
    setLoading(true);
    try {
      const response = await submitStep4(billingData);
      const { response_code, orderid, transactionid, amount_authorized } =
        response;

      if (response_code === "1" || response_code === "100") {
        setstep4Data({
          orderID: orderid,
          transactionID: transactionid,
          amountPaid: amount_authorized,
        });
      } else if (response_code === "2" || response_code === "3") {
        setErrorMessage(
          "There is something wrong with your payment information, please check everything and submit again."
        );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error submitting Step 4:", error);
      setErrorMessage(
        "An error occurred while processing your payment. Please try again later."
      );
      setError(error);
    }
  };
  if (error) {
    throw error;
  }
  return (
    <div className="flex justify-center transition-all items-center box-border   w-full ">
      <div className="bg-[#0492c2] w-full max-w-[400px] rounded-md box-border px-2 py-1">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-[5px] ">
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingFirstName" />
                </label>
                <input
                  type="text"
                  name="BillingFirstName"
                  value={billingData.BillingFirstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingLastName" />
                </label>
                <input
                  type="text"
                  name="BillingLastName"
                  value={billingData.BillingLastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingAddress1" />
                </label>
                <input
                  type="text"
                  name="BillingAddress1"
                  value={billingData.BillingAddress1}
                  onChange={handleChange}
                  placeholder="Billing Address 1"
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingAddress2" />
                </label>
                <input
                  type="text"
                  name="BillingAddress2"
                  value={billingData.BillingAddress2}
                  onChange={handleChange}
                  placeholder="Billing Address 2"
                  className="text-black p-[5px] border w-full rounded box-border"
                />
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingCity" />
                </label>
                <input
                  type="text"
                  name="BillingCity"
                  value={billingData.BillingCity}
                  onChange={handleChange}
                  placeholder="Billing City"
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingStateID" />
                </label>
                <select
                  name="BillingStateID"
                  value={billingData.BillingStateID}
                  onChange={handleStateChange}
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                >
                  <option value={0}>
                    <TextBlock section="inputForm4" element="selectState" />
                  </option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingZip" />
                </label>
                <input
                  type="text"
                  name="BillingZip"
                  value={billingData.BillingZip}
                  className="text-black p-[5px] border w-full rounded box-border"
                  onChange={handleChange}
                  placeholder="Billing Zip"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingPhone" />
                </label>
                <input
                  type="text"
                  name="BillingPhone"
                  value={billingData.BillingPhone}
                  className="text-black p-[5px] border w-full rounded box-border"
                  onChange={handleChange}
                  placeholder="Billing Phone"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="billingEmail" />
                </label>
                <input
                  type="email"
                  name="BillingEmail"
                  value={billingData.BillingEmail}
                  className="text-black p-[5px] border w-full rounded box-border"
                  onChange={handleChange}
                  placeholder="Billing Email"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="creditCardNumber" />
                </label>
                <input
                  type="text"
                  name="ccnumber"
                  value={billingData.ccnumber}
                  className="text-black p-[5px] border w-full rounded box-border"
                  onChange={handleChange}
                  placeholder="Credit Card"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="expirationDate" />
                </label>
                <input
                  type="text"
                  name="ccexp"
                  value={billingData.ccexp}
                  className="text-black p-[5px] border w-full rounded box-border"
                  onChange={handleChange}
                  placeholder="Expiration Date"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm4" element="cvvCode" />
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={billingData.cvv}
                  onChange={handleChange}
                  className="text-black p-[5px] border w-full rounded box-border"
                  placeholder="CVV Code"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-white mt-[5%]">
            <LoadingButton
              loading={loading}
              variant="contained"
              type="submit"
              className="bg-[#7ec8e3] w-[150px] text-white border-none py-[10px] px-[20px] rounded cursor-pointer transition-all hover:bg-[#0056b3]"
            >
              <TextBlock section="inputForm4" element="submit" />
            </LoadingButton>
            {/* <button
              type="submit"
              className="bg-[#7ec8e3] text-white border-none py-[10px] px-[20px] rounded cursor-pointer hover:bg-[#0056b3]"
            >
              <TextBlock section="inputForm4" element="submit" />
            </button> */}
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default InputForm4;
