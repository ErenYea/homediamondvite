import React, { useState } from "react";
import TextBlock from "./TextBlock";

import { useNavigate, useNavigation } from "react-router-dom";
import { useAppStore } from "../lib/store";
import { submitStep1 } from "../lib/step1";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const InputForm = ({ companyid }) => {
  const navigate = useNavigate();
  const { setstep1Data, incrementStep, error, setError, sellerId } =
    useAppStore();
  const [loading, setloading] = useState(false);
  // const [error, setError] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const dataToSubmit = {
        FirstName: form.firstName,
        LastName: form.lastName,
        ZipCode: form.zip,
        Email: form.email,
        Phone: form.phone,
        SellerID: sellerId,
      };

      console.log("Sending data to backend:", dataToSubmit);

      const response = await submitStep1(dataToSubmit);

      response.FirstName = form.firstName;
      response.LastName = form.lastName;
      response.Email = form.email;
      response.Phone = form.phone;
      response.ZipCode = form.zip;

      // console.log("Response from server:", response);
      incrementStep();
      setstep1Data(response);
      setloading(false);
      if (companyid) {
        navigate(`/enrollment/${companyid}`);
      } else {
        navigate(`/enrollment`);
      }
    } catch (error) {
      console.log("Error", error);
      setloading(false);
      // console.error("Error submitting form:", error);
      setError(error);
    }
  };

  return (
    <div className="flex justify-center  transition-all items-center box-border w-full">
      <div className="bg-[#2E7EB5] w-full max-w-[400px] rounded-md box-border px-2 py-1">
        <h2 className="text-center mb-[5px] text-white !text-xl subheading !font-semibold ">
          <TextBlock section="inputForm" element="title" />
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-[5px]">
            <label className="text-white mb-[5px] text-lg">
              <TextBlock section="inputForm" element="firstNameLabel" />
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="text-black p-[5px] border rounded box-border text-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-[5px]">
            <label className=" mb-[5px] text-lg text-white">
              <TextBlock section="inputForm" element="lastNameLabel" />
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="text-black p-[5px] border rounded box-border text-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-[5px]">
            <label className="text-white mb-[5px] text-lg">
              <TextBlock section="inputForm" element="emailLabel" />
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="text-black p-[5px] border rounded box-border text-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-[5px]">
            <label className="text-white mb-[5px] text-lg">
              <TextBlock section="inputForm" element="phoneLabel" />
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="text-black p-[5px] border rounded box-border text-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-[5px]">
            <label className="text-white mb-[5px] text-lg">
              <TextBlock section="inputForm" element="zipLabel" />
            </label>
            <input
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              className="text-black p-[5px] border rounded box-border text-lg"
              required
            />
          </div>
          <div className="flex justify-center text-white mt-[5%]">
            <LoadingButton
              loading={loading}
              variant="contained"
              type="submit"
              className="!bg-[#63A8AE] w-fit text-white border-none text-lg py-[10px] px-[20px] rounded cursor-pointer transition-all "
            >
              <TextBlock section="inputForm" element="submitButton" />
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
