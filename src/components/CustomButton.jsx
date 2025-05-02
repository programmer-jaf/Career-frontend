import React from "react";
import { redirect } from "react-router-dom";

const CustomButton = ({ title, style, onClick, url }) => {
  return (
    <>
      <button
        className={`${style} px-6 py-2`}
        onClick={() => onClick(redirect(url))}
      >
        {title}
      </button>
    </>
  );
};
export default CustomButton;
