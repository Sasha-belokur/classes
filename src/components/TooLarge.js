import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const TooSmall = () => {
  return (
    <p className="notification">
      <FaAngleDoubleRight className="icon" />
      "Go closer!"
      <FaAngleDoubleLeft className="icon" />
    </p>
  );
};

export default TooSmall;
