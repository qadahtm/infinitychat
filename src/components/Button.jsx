import React from "react";

const Button = ({ styles, url }) => (
  <a  href={url} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-purple-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </a>
);

export default Button;