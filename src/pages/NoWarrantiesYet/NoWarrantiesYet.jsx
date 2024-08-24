import React from "react";
import { NavLink } from "react-router-dom";
import TextBlock from "../../components/TextBlock";

const NoWarrantiesYet = () => {
  return (
    <div className="w-full flex items-center justify-center mt-[100px] pb-[50px]">
      <div className="w-[80%] flex flex-col">
        <div className="flex flex-col mx-auto">
          <span>
            <TextBlock section="noWarrantiesPage" element="sorryMessage" />
          </span>
          <span>
            <TextBlock section="noWarrantiesPage" element="sorryDescription" />
          </span>
        </div>
        <div className="flex flex-col">
          <span>
            <TextBlock section="noWarrantiesPage" element="contactMessage" />
          </span>
          <span>
            <TextBlock
              section="noWarrantiesPage"
              element="contactDescription"
            />
          </span>
        </div>
        <NavLink to="/contact-us">
          <div className="flex justify-center bg-teal-400 items-center py-2 px-6 text-2xl cursor-pointer hover:bg-blue-400 transition-all rounded-lg shadow-md border text-white">
            <span>
              <TextBlock
                section="noWarrantiesPage"
                element="contactButtonText"
              />
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NoWarrantiesYet;
