import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextBlock from "./TextBlock";
// import { submitContactUs } from "../lib/contactus";
import AlertDialogSlide from "./AlertDialogSlide";
import { states } from "../lib/constant";
import { submitremovedata } from "../lib/removedata";

const RemoveMyDataForm = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    homeAddress: "",
    homeCity: "",
    homeZipCode: "",
    homeStateID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitremovedata(form);
      openSuccessDailong();
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        zipCode: "",
        homeAddress: "",
        homeCity: "",
        homeZipCode: "",
        homeStateID: 1,
      }); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send Remove Data request.");
    }
    setLoading(false);
  };
  const openSuccessDailong = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <div className="w-[80%] xl:w-[70%]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2  w-full">
        <div className="flex items-center w-full gap-4">
          <div className="text-[#333] mb-[5px] w-1/2">
            <label htmlFor="name" className="text-white mb-[5px] subheading">
              <TextBlock section="removeMyDataPage" element="firstName" />
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="text-black p-[5px] border w-full rounded box-border"
              required
            />
          </div>
          <div className="text-[#333] mb-[5px] w-1/2">
            <label htmlFor="name" className="text-white mb-[5px] subheading">
              <TextBlock section="removeMyDataPage" element="lastName" />
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="text-black p-[5px] border w-full rounded box-border"
              required
            />
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="text-[#333] mb-[5px] w-1/2">
            <label htmlFor="email" className="text-white mb-[5px] subheading">
              <TextBlock section="removeMyDataPage" element="phone" />
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="text-black p-[5px] border w-full rounded box-border"
              required
            />
          </div>
          <div className="text-[#333] mb-[5px] w-1/2">
            <label htmlFor="email" className="text-white mb-[5px] subheading">
              <TextBlock section="removeMyDataPage" element="email" />
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="text-black p-[5px] border w-full rounded box-border"
              required
            />
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="text-[#333] mb-[5px] w-1/2">
            <label htmlFor="email" className="text-white mb-[5px] subheading">
              <TextBlock section="removeMyDataPage" element="zipCode" />
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              pattern="[0-9]{5}"
              value={form.zipCode}
              onChange={handleChange}
              className="text-black p-[5px] border w-full rounded box-border"
              required
            />
          </div>
          <div className="text-[#333] mb-[5px] w-1/2">
            <label htmlFor="email" className="text-white mb-[5px] subheading">
              <TextBlock section="removeMyDataPage" element="homeCity" />
            </label>
            <input
              type="text"
              id="homeCity"
              name="homeCity"
              value={form.homeCity}
              onChange={handleChange}
              className="text-black p-[5px] border w-full rounded box-border"
              required
            />
          </div>
        </div>
        <div className="text-[#333] mb-[5px] w-full">
          <label htmlFor="email" className="text-white mb-[5px] subheading">
            <TextBlock section="removeMyDataPage" element="homeAddress" />
          </label>
          <input
            type="text"
            id="homeAddress"
            name="homeAddress"
            value={form.homeAddress}
            onChange={handleChange}
            className="text-black p-[5px] border w-full rounded box-border"
            required
          />
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="text-[#333] mb-[5px] w-1/2">
            <label htmlFor="email" className="text-white mb-[5px] subheading">
              <TextBlock section="removeMyDataPage" element="homeZipCode" />
            </label>
            <input
              type="text"
              id="homeZipCode"
              name="homeZipCode"
              pattern="[0-9]{5}"
              value={form.homeZipCode}
              onChange={handleChange}
              className="text-black p-[5px] border w-full rounded box-border"
              required
            />
          </div>
          <div className="text-[#333] mb-[5px] w-1/2">
            <label className="text-white mb-[5px] subheading">
              <TextBlock section="removeMyDataPage" element="homeState" />
            </label>
            <select
              name="homeStateID"
              value={form.homeStateID}
              onChange={handleChange}
              required
              className="text-black p-[7px] border w-full rounded box-border"
            >
              <option value={""} disabled>
                <TextBlock section="inputForm2" element="selectState" />
              </option>
              {states.map((state) => (
                <option key={state.id} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button
          variant="contained"
          type="submit"
          className="!bg-[#63A8AE]"
          disabled={loading}
        >
          <TextBlock section="contactUsPage" element="contactUsSend" />
        </Button>
      </form>
      <AlertDialogSlide
        open={open}
        title={"Removed Data"}
        description={
          "Your Removed Data request is Successfully Sent to The HomeDiamond"
        }
      />
    </div>
  );
};

export default RemoveMyDataForm;
