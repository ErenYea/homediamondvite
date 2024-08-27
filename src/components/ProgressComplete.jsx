import React from "react";
import TextBlock from "./TextBlock";
import { Link } from "react-router-dom";

const ProgressComplete = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="w-full h-full flex flex-col">
        <div className="text-xl font-semibold text-black subheading">
          <TextBlock section="processCompleted" element={`congratsMessage`} />
        </div>
      </div>
      <div>
        <TextBlock section="processCompleted" element={`ThanksMessage`} />
      </div>
      <div className="text-xl font-semibold text-black subheading">
        <TextBlock section="processCompleted" element={`subHeading`} />
      </div>
      <div>
        <TextBlock section="processCompleted" element={`subHeadingText`} />
      </div>
      {/* <div className="cursor-pointer text-blue-400 font-bold">
        <Link to={"#"}>
          <TextBlock section="processCompleted" element={`subHeadingLink1`} />
        </Link>
      </div> */}
      <div className="cursor-pointer text-blue-400 font-bold">
        <Link to={"/privacy"}>
          <TextBlock section="processCompleted" element={`subHeadingLink2`} />
        </Link>
      </div>
      <div>
        <TextBlock
          section="processCompleted"
          element={`furtherAssistanceText`}
        />
      </div>
    </div>
  );
};

export default ProgressComplete;
