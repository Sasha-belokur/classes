import React from "react";

const Error = ({ error }) => {
  const image = error && require(`../images/${error}.jpg`);
  const message =
    error === "much" ? "Less than 10 please :0" : "More than 1 please :C";

  return (
    <div className={["error", error && "shown"].join(" ")}>
      <img src={image} alt="Error notification" />
      {message}
    </div>
  );
};

export default Error;
