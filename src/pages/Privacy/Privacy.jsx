import React from "react";
import TextBlock from "../../components/TextBlock";

const Privacy = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-auto mt-[100px] pb-[50px] gap-10">
      <div className="bg-[#63A8AE] text-white transition-all font-semibold text-xl lg:text-2xl w-full text-center py-2 ">
        <TextBlock section="noWarrantiesPage" element={`title`} />
      </div>
    </div>
  );
};

export default Privacy;
