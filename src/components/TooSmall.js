import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const TooSmall = () => {
  return (
    <p className="notification">
      <FaAngleDoubleLeft className="icon" />
      "Go wider!"
      <FaAngleDoubleRight className="icon" />
    </p>
  );
};

export default TooSmall;
