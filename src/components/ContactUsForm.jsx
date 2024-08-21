import React, { useState } from "react";
import { Button } from "@mui/material";
import TextBlock from "./TextBlock";
import { submitContactUs } from "../lib/contactus";

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      await submitContactUs(form);
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };
  return (
    <div className="w-[80%] xl:w-[70%]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2  w-full">
        <div className="text-[#333] mb-[5px] w-full">
          <label htmlFor="name" className="text-[#333] mb-[5px]">
            <TextBlock section="contactUsPage" element="contactUsName" />
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="text-black p-[5px] border w-full rounded box-border"
            required
          />
        </div>
        <div className="text-[#333] mb-[5px] w-full">
          <label htmlFor="email" className="text-[#333] mb-[5px]">
            <TextBlock section="contactUsPage" element="contactUsEmail" />
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
        <div className="text-[#333] mb-[5px] w-full">
          <label htmlFor="email" className="text-[#333] mb-[5px]">
            <TextBlock section="contactUsPage" element="contactUsPhone" />
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
        <div className="text-[#333] mb-[5px] w-full">
          <label htmlFor="message" className="text-[#333] mb-[5px]">
            <TextBlock section="contactUsPage" element="contactUsMessage" />
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="text-black p-[5px] border w-full rounded box-border"
            required
          />
        </div>
        <Button variant="contained" type="submit">
          <TextBlock section="contactUsPage" element="contactUsSend" />
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
