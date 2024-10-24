import React from "react";
import PremiumHomeText2 from "./PremiumHomeText2";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import TextBlock from "./TextBlock";
import { Button } from "@mui/material";
import { useAppStore } from "../lib/store";

const ErrorPage = () => {
  const { setError, error } = useAppStore();
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
      <div className="bg-[#63A8AE] text-white transition-all subheading font-semibold text-xl lg:text-2xl w-full text-center py-2 ">
        {error.text ? (
          error.type == 1 ? (
            <div className="flex justify-center space-x-2">
              <div>{error.text}</div>
              <div> Click here to </div>
              <Button
                variant="contained"
                className="!bg-white w-fit !text-[#63A8AE] border-none text-lg py-[10px] px-[20px] rounded cursor-pointer transition-all "
                onClick={() => setError(null)}
              >
                Go Back
              </Button>
              <div> to the page.</div>
            </div>
          ) : (
            error.text
          )
        ) : (
          <TextBlock section="errorpage" element={`title`} />
        )}
      </div>
      <div className="w-full px-2 sm:px-0 sm:w-[40%] flex flex-col gap-6">
        <div className="flex flex-col items-start">
          <span className="text-xl !font-semibold subheading ">
            <TextBlock section="noWarrantiesPage" element="sorryMessage" />
          </span>
          <span className=" text-xl">
            <TextBlock section="noWarrantiesPage" element="sorryDescription" />
          </span>
        </div>
        <div className="flex flex-col  items-start ">
          <span className="text-xl !font-semibold subheading">
            <TextBlock section="noWarrantiesPage" element="contactMessage" />
          </span>
          <span className=" text-xl">
            <TextBlock
              section="noWarrantiesPage"
              element="contactDescription"
            />
          </span>
        </div>
        {error.type == 1 ? (
          <></>
        ) : (
          <div className="flex justify-center text-white mt-[5%]">
            <Button
              variant="contained"
              className="!bg-[#63A8AE] w-fit text-white border-none text-lg py-[10px] px-[20px] rounded cursor-pointer transition-all "
              onClick={() => setError(null)}
            >
              Go Back
            </Button>
          </div>
        )}

        <Link to="/contact-us">
          <div className="flex justify-center w-fit mx-auto bg-[#63A8AE] items-center py-2 px-6 text-2xl cursor-pointer  transition-all rounded-lg shadow-md border text-white">
            <span className="w-fit">
              <TextBlock
                section="noWarrantiesPage"
                element="contactButtonText"
              />
            </span>
          </div>
        </Link>
      </div>
      <div className="flex sm:flex-row flex-col items-start ju w-full h-[400px] relative gap-2 sm:gap-2">
        <div className="z-0 w-full sm:w-[50%] h-[400px] bg-white">
          <div className="w-full h-full flex flex-col pt-6 items-center">
            <img src="/dhp_home_logo.jpg" alt="" className="w-[350px]" />
            <div
              onClick={gotohome}
              className="flex justify-center bg-[#63A8AE] items-center py-2 px-6 text-2xl cursor-pointer  transition-all   rounded-lg shadow-md border text-white"
            >
              Free Quote
            </div>
          </div>
        </div>
        <div className="hidden py-2 sm:py-0 z-10 h-full flex-grow bg-gradient-to-r from-[#63A8AE] to-[#2E7Eb5] sm:flex items-center">
          <div
            className="cutBox bg-gradient-to-r from-[#63A8AE] to-[#5fa4af] h-full"
            style={{
              clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
              width: "calc(30%)", // Expand the width to cover the extra clipped area
              marginLeft: "-10%", // Shift the div to the left by the amount that was clipped
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
