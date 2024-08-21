import React from "react";
import TextBlock from "./TextBlock";
import { useAppStore } from "../lib/store";

type Props = {};

const ProcessCompleted = (props: Props) => {
  const { step4Data } = useAppStore();
  return (
    <div className="flex justify-center items-center box-border w-full ">
      <div className="bg-[#0492c2] w-full max-w-[400px] rounded-md box-border px-2 py-1">
        <h2 className="text-center mb-[5px]">
          <TextBlock section="processCompleted" element="title" />
        </h2>
        <p>
          <TextBlock section="processCompleted" element="orderID" />:{" "}
          {step4Data?.orderID}
        </p>
        <p>
          <TextBlock section="processCompleted" element="transactionID" />:{" "}
          {step4Data?.transactionID}
        </p>
        <p>
          <TextBlock section="processCompleted" element="amountPaid" />: $
          {step4Data?.amountPaid}
        </p>
      </div>
    </div>
  );
};

export default ProcessCompleted;
