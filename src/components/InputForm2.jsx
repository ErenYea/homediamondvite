import React, { useEffect, useMemo, useState } from "react";
import TextBlock from "./TextBlock";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../lib/store";
import { submitStep2 } from "../lib/step2";
import { states } from "../lib/constant";
import { LoadingButton } from "@mui/lab";

const InputForm2 = ({ companyid }) => {
  const navigate = useNavigate();
  const { step1Data, setstep2Data } = useAppStore();
  const [loading, setLoading] = useState(false);
  const initialData = useMemo(() => step1Data || {}, [step1Data]);
  const initialSellerID = useMemo(() => step1Data?.SellerID || "", [step1Data]);

  const [formData, setFormData] = useState({
    LeadID: initialData.LeadID || "",
    LeadUID: initialData.LeadUID || "",
    FirstName: initialData.FirstName || "",
    LastName: initialData.LastName || "",
    Phone: initialData.Phone || "",
    Email: initialData.Email || "",
    ZipCode: initialData.ZipCode || "",
    SellerID: 1,
    PropertyType: 1,
    PropertyAddress1: "",
    PropertyAddress2: "",
    City: initialData.CityName || "",
    StateID: 1,
    SqFt: 0,
  });
  const propertyTypes = [
    { id: 1, name: "Single Family" },
    { id: 2, name: "Condominium" },
    { id: 3, name: "Multi Family" },
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.SqFt > 7500) {
      navigate("/nowarrantiesyet");
      return;
    }
    setLoading(true);
    try {
      console.log("This is the data being sent: ", formData);
      const response = await submitStep2(formData);
      console.log("API Response:", response);
      setstep2Data(response);
      setLoading(false);
      sessionStorage.setItem("initialData", JSON.stringify(response));
      sessionStorage.setItem("SellerID", formData.SellerID.toString());
      // if (companyid){

      // }
      // // navigate("/enrollment");
    } catch (error) {
      setLoading(false);
      console.error("Error submitting Step 2:", error);
    }
  };

  useEffect(() => {
    console.log("Received initialData:", initialData);
    setFormData((prevData) => ({
      ...prevData,
      LeadID: initialData.LeadID || "",
      LeadUID: initialData.LeadUID || "",
      FirstName: initialData.FirstName || "",
      LastName: initialData.LastName || "",
      Phone: initialData.Phone || "",
      Email: initialData.Email || "",
      ZipCode: initialData.ZipCode || "",
      SellerID: 1,
      City: initialData.CityName || "",
    }));
  }, [initialData, initialSellerID]);

  return (
    <div className="flex justify-center items-center box-border w-full ">
      <div className="bg-[#0492c2] w-full max-w-[400px] rounded-md box-border px-2 py-1">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-[5px] ">
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="firstName" />
                </label>
                <input
                  type="text"
                  name="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="lastName" />
                </label>
                <input
                  type="text"
                  name="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="phone" />
                </label>
                <input
                  type="text"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  placeholder="Phone (10 digits)"
                  className="text-black p-[5px] border w-full rounded box-border"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="email" />
                </label>
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="zipCode" />
                </label>
                <input
                  type="text"
                  name="ZipCode"
                  value={formData.ZipCode}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  pattern="[0-9]{5}"
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="propertyType" />
                </label>
                <select
                  name="PropertyType"
                  value={formData.PropertyType}
                  onChange={handleChange}
                  required
                  className="text-black p-[5px] border w-full rounded box-border"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="propertyAddress1" />
                </label>
                <input
                  type="text"
                  name="PropertyAddress1"
                  value={formData.PropertyAddress1}
                  onChange={handleChange}
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="propertyAddress2" />
                </label>
                <input
                  type="text"
                  name="PropertyAddress2"
                  value={formData.PropertyAddress2}
                  onChange={handleChange}
                  className="text-black p-[5px] border w-full rounded box-border"
                />
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="city" />
                </label>
                <input
                  type="text"
                  name="City"
                  value={formData.City}
                  onChange={handleChange}
                  className="text-black p-[5px] border w-full rounded box-border"
                  required
                />
              </div>
              <div className="text-[#333] mb-[5px] w-1/2">
                <label className="text-[#333] mb-[5px]">
                  <TextBlock section="inputForm2" element="state" />
                </label>
                <select
                  name="StateID"
                  value={formData.StateID}
                  onChange={handleChange}
                  required
                  className="text-black p-[5px] border w-full rounded box-border"
                >
                  <option value={0}>
                    <TextBlock section="inputForm2" element="selectState" />
                  </option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-[#333] mb-[5px] ">
              <label className="text-[#333] mb-[5px]">
                <TextBlock section="inputForm2" element="sqFt" />
              </label>
              <input
                type="number"
                name="SqFt"
                value={formData.SqFt}
                onChange={handleChange}
                className="text-black p-[5px] border w-full rounded box-border"
                step="1"
                required
              />
            </div>
          </div>
          <div className="flex justify-center text-white mt-[5%]">
            <LoadingButton
              loading={loading}
              variant="contained"
              type="submit"
              className="bg-[#7ec8e3] text-white border-none py-[10px] px-[20px] rounded cursor-pointer transition-all hover:bg-[#0056b3]"
            >
              <TextBlock section="inputForm2" element="submit" />
            </LoadingButton>
            {/* <button
              type="submit"
              className="bg-[#7ec8e3] text-white border-none py-[10px] px-[20px] rounded cursor-pointer hover:bg-[#0056b3]"
            >
              <TextBlock section="inputForm2" element="submit" />
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm2;
