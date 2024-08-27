import React, { useState } from "react";
import TextBlock from "../../components/TextBlock";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const [openedQuestion, setOpenedQuestion] = useState(null);

  const faqs = [
    {
      question: "What does a home warranty cover?",
      answer:
        "A home warranty may cover certain systems like central air conditioning, heating, plumbing, electrical, and water heaters, as well as appliances like refrigerators, stoves, washers, and dryers.",
    },
    {
      question: "Do you cover older appliances?",
      answer:
        "Yes. If the covered system or appliance is in working order when you purchase a 2-10 HBW home warranty (i.e., doesn't have a pre-existing problem).",
    },
    {
      question:
        "What's the difference between a home warranty and homeowners insurance?",
      answer:
        "A home warranty is an annual contract that can help reduce the costs to repair or replace covered systems and appliances that break down from normal wear and tear. Homeowners insurance covers loss from incidents like fire, storms, or vandalism. The coverages provided by a home warranty and homeowners insurance typically don't overlap and often complement one another to provide comprehensive protection.",
    },
    {
      question: "What is a home warranty?",
      answer:
        "A home warranty (or Home Warranty Service Agreement as we call it) is a powerful budget-protecting service contract for homeowners that can provide coverage for things that homeowners insurance doesn't.",
    },
    {
      question: "How do I request service or file a claim?",
      answer:
        "To request service, log in to your Homeowner Portal account, select the system or appliance that needs service, answer a few questions, and we'll dispatch an authorized Service Contractor to your home.",
    },
    {
      question: "When can you purchase a home warranty?",
      answer:
        "You can purchase a home warranty at any time for any house. While many home warranties are purchased by a buyer or a seller of a home during a real estate transaction, a home warranty can be purchased by any homeowner looking to protect their budget.",
    },
  ];

  const handleQuestionToggle = (ind) => {
    setOpenedQuestion((prevIndex) => (prevIndex === ind ? null : ind));
  };

  return (
    <div className="mt-[100px] pb-[50px] text-black h-screen w-full flex justify-center items-center">
      <div className="flex flex-col h-fit gap-8 w-[70%]">
        <span className="subheading text-[#2E7Eb5] !font-extrabold !text-3xl text-center">
          <TextBlock section="faqPage" element="faqHeading" />
        </span>
        <div className="w-full p-5 rounded-lg bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] flex flex-col gap-5">
          {faqs.map((faq, ind) => (
            <div
              key={ind}
              className="w-full flex justify-between bg-white text-[#2E7Eb5] p-5 rounded-lg cursor-pointer transition-all duration-300"
              onClick={() => handleQuestionToggle(ind)}
            >
              <div className="w-[90%] flex flex-col gap-5">
                <span>{faq.question}</span>
                {openedQuestion === ind && <span>{faq.answer}</span>}
              </div>
              <div className="transition-transform duration-300">
                {openedQuestion === ind ? (
                  <MinusIcon className="text-[#2E7Eb5] w-6 h-6" />
                ) : (
                  <PlusIcon className="text-[#2E7Eb5] w-6 h-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
