import React from "react";
import "./black.css";
const MyBlackButton = ({ callback, title, class1 }) => {
  return (
    <button
      onClick={callback}
      className={`font-medium md:font-semibold text-[16px] md:text-[18px] my-button3 ${class1}`}
    >
      {title}
    </button>
  );
};

export default MyBlackButton;
