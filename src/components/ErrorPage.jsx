import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="font-tainos w-full flex flex-col mt-[100px] pb-[50px]">
      <div className="w-full h-full flex justify-center items-center text-2xl">
        <div className="error-page">
          <h1>Something went wrong</h1>
          {error && (
            <div className="error-details">
              <p>{error.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
