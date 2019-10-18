import React from "react";
import { CSSTransition } from "react-transition-group";

const Error = ({ error }) => {
  return (
    <>
      <CSSTransition
        in={error === "much"}
        unmountOnExit
        timeout={2000}
        classNames="error"
      >
        <div className="error">
          <span role="img" aria-label="stunned">
            Less than 10 please 😮
          </span>
          <img src={require(`../images/much.jpg`)} alt="Error notification" />
        </div>
      </CSSTransition>
      <CSSTransition
        in={error === "little"}
        unmountOnExit
        timeout={2000}
        classNames="error"
      >
        <div className="error">
          <span role="img" aria-label="disappointed">
            More than 1 please 😭
          </span>
          <img src={require(`../images/little.jpg`)} alt="Error notification" />
        </div>
      </CSSTransition>
    </>
  );
};

export default Error;
