import React from "react";

const Button = ({ children, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
    onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-4 px-8 rounded-full relative z-10 flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
