import React from "react";
import { useAppStore } from "../lib/store";
import TextBlock from "./TextBlock";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const { language } = useAppStore();
  const quotes = Array.from({ length: 25 }, (_, i) => (
    <span key={i} className="mr-[50px]">
      <TextBlock section="quotes" element={`quote${i + 1}`} />
    </span>
  ));
  return (
    <div className="text-white bg-[#2E7EB5]">
      <Marquee pauseOnHover gradient={false}>
        {quotes}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
