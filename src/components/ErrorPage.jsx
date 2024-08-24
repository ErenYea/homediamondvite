import React from "react";
import PremiumHomeText2 from "./PremiumHomeText2";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import TextBlock from "./TextBlock";

const ErrorPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const gotohome = () => {
    if (params?.id) {
      navigate(`/${params.id}`);
    } else {
      navigate("/");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center my-auto mt-[100px] pb-[50px] gap-10">
      <div className="bg-[#63A8AE] text-white transition-all font-semibold text-xl lg:text-2xl w-full text-center py-2 ">
        <TextBlock section="noWarrantiesPage" element={`title`} />
      </div>
      <div className="w-[40%] flex flex-col gap-6">
        <div className="flex flex-col items-start">
          <span className="text-xl font-semibold">
            <TextBlock section="noWarrantiesPage" element="sorryMessage" />
          </span>
          <span>
            <TextBlock section="noWarrantiesPage" element="sorryDescription" />
          </span>
        </div>
        <div className="flex flex-col  items-start">
          <span className="text-xl font-semibold">
            <TextBlock section="noWarrantiesPage" element="contactMessage" />
          </span>
          <span>
            <TextBlock
              section="noWarrantiesPage"
              element="contactDescription"
            />
          </span>
        </div>
        <Link to="/contact-us">
          <div className="flex justify-center w-fit mx-auto bg-teal-400 items-center py-2 px-6 text-2xl cursor-pointer hover:bg-blue-400 transition-all rounded-lg shadow-md border text-white">
            <span className="w-fit">
              <TextBlock
                section="noWarrantiesPage"
                element="contactButtonText"
              />
            </span>
          </div>
        </Link>
      </div>
      <div className="flex items-start w-full h-[400px] relative">
        <div className="z-0 w-[50%] h-[400px] bg-white">
          <div className="w-full h-full flex flex-col pt-6 items-center">
            <img src="/dhp_home_logo.jpg" alt="" className="w-[350px]" />
            <div
              onClick={gotohome}
              className="flex justify-center bg-teal-400 items-center py-2 px-6 text-2xl cursor-pointer hover:bg-blue-400 transition-all   rounded-lg shadow-md border text-white"
            >
              Free Quote
            </div>
          </div>
        </div>
        <div className=" z-10 h-full flex-grow bg-teal-500 flex items-center">
          <div
            className="cutBox bg-teal-500 h-full"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
              width: "calc(30%)", // Expand the width to cover the extra clipped area
              marginLeft: "-20%", // Shift the div to the left by the amount that was clipped
            }}
          ></div>
          <div className="w-full  text-white">
            <PremiumHomeText2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
