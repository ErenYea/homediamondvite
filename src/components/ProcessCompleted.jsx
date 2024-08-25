import React from "react";
import TextBlock from "./TextBlock";
import { useAppStore } from "../lib/store";

const ProcessCompleted = () => {
  const { step4Data } = useAppStore();
  return (
    <div className="flex  justify-center transition-all items-start box-border w-full h-full ">
      <div className="bg-[#2E7EB5] w-full max-w-[400px] rounded-md box-border px-2 py-1 flex flex-col">
        <h2 className="text-center mb-[5px] text-xl font-semibold">
          <TextBlock section="processCompleted" element="title" />
        </h2>
        <div className="grid grid-cols-2 text-white gap-2 mt-2 mb-2 text-lg">
          <div>
            <TextBlock section="processCompleted" element="orderID" />:{" "}
          </div>
          <div>{step4Data?.orderID}</div>
          <div>
            <TextBlock section="processCompleted" element="transactionID" />:{" "}
          </div>
          <div>{step4Data?.transactionID}</div>
          <div>
            <TextBlock section="processCompleted" element="amountPaid" />:
          </div>
          <div>${step4Data?.amountPaid}</div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCompleted;
