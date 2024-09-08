import React, { useEffect, useMemo, useState } from "react";
import TextBlock from "./TextBlock";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../lib/store";
import { getProperty, submitStep2 } from "../lib/step2";
import { states } from "../lib/constant";
import { LoadingButton } from "@mui/lab";

const InputForm2 = ({ companyid }) => {
  const navigate = useNavigate();
  const { step1Data, setstep2Data,incrementStep,error,setError,sellerId } = useAppStore();
  const [loading, setLoading] = useState(false);
  const [propertyTypes, setPropertyType] = useState([]);
  const initialData = useMemo(() => step1Data || {}, [step1Data]);
  const initialSellerID = useMemo(() => step1Data?.SellerID || "", [step1Data]);
  // const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    LeadID: initialData.LeadID || "",
    LeadUID: initialData.LeadUID || "",
    FirstName: initialData.FirstName || "",
    LastName: initialData.LastName || "",
    Phone: initialData.Phone || "",
    Email: initialData.Email || "",
    ZipCode: initialData.ZipCode || "",
    SellerID: sellerId,
    PropertyType: 1,
    PropertyAddress1: "",
    PropertyAddress2: "",
    City: initialData.CityName || "",
    StateID: initialData.StateAbbreviation
      ? states.filter(
          (state) => state.abbreviation === initialData.StateAbbreviation
        )[0].id
      : 1,
    SqFt: 0,
  });

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
      // console.log("This is the data being sent: ", formData);
      const response = await submitStep2(formData);

      response.FirstName = formData.FirstName;
      response.LastName = formData.LastName;
      response.Email = formData.Email;
      response.ZipCode = formData.ZipCode;
      response.PropertyType = formData.PropertyType;
      response.PropertyAddress1 = formData.PropertyAddress1;
      response.PropertyAddress2 = formData.PropertyAddress2;
      response.City = formData.City;
      response.StateID = formData.StateID;
      // console.log("API Response:", response);
      incrementStep()
      setstep2Data(response);
      setLoading(false);
      sessionStorage.setItem("initialData", JSON.stringify(response));
      sessionStorage.setItem("SellerID", formData.SellerID.toString());
      // if (companyid){

      // }
      // // navigate("/enrollment");
    } catch (error) {
      setLoading(false);
      // console.error("Error submitting Step 2:", error);
      setError(error);
    }
  };
  const fetchPropertyType = async () => {
    const response = await getProperty();
    setPropertyType(response.PropertyType);
  };
  useEffect(() => {
    // console.log(initialData);
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
      StateID: initialData.StateAbbreviation
        ? states.filter(
            (state) => state.abbreviation === initialData.StateAbbreviation
          )[0].id
        : 1,
    }));
  }, [initialData, initialSellerID]);

  useEffect(() => {
    fetchPropertyType();
  }, []);

  return (
    <div className="flex justify-center transition-all items-center box-border w-full ">
      <div className="bg-[#2E7EB5] w-full max-w-[400px] rounded-md box-border px-2 py-1">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-[5px] gap-2 ">
            <div className="w-full flex flex-row space-x-2">
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
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
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
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
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
                  <TextBlock section="inputForm2" element="phone" />
                </label>
                <input
                  type="text"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  placeholder="Phone (10 digits)"
                  className="text-black p-[5px] border w-full rounded box-border"
                  // pattern="[0-9]{11}"
                  required
                />
              </div>
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
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
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
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
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
                  <TextBlock section="inputForm2" element="propertyType" />
                </label>
                <select
                  name="PropertyType"
                  value={formData.PropertyType}
                  onChange={handleChange}
                  required
                  className="text-black p-[7px] border w-full rounded box-border"
                >
                  {propertyTypes?.map((type) => (
                    <option
                      key={type.PropertyTypeID}
                      value={type.PropertyTypeID}
                    >
                      {type.PropertyTypeName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-full flex flex-row space-x-2">
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
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
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
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
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
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
              <div className="text-white mb-[5px] w-1/2">
                <label className="text-white mb-[5px] subheading">
                  <TextBlock section="inputForm2" element="state" />
                </label>
                <select
                  name="StateID"
                  value={formData.StateID}
                  onChange={handleChange}
                  required
                  className="text-black p-[7px] border w-full rounded box-border"
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
            <div className="text-white mb-[5px] ">
              <label className="text-white mb-[5px] subheading">
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
              className="!bg-[#63A8AE] w-[150px] text-white border-none py-[10px] px-[20px] rounded cursor-pointer transition-all hover:bg-[#0056b3]"
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
