import React, { Component } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import Error from "./Error";

class Estimate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toliks: 5,
      error: null
    };

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  handleIncrease() {
    if (this.state.toliks < 9) {
      this.setState({ toliks: this.state.toliks + 1 });
      this.setState({ error: null });
    } else {
      this.setState({ error: "much" });
    }
  }

  handleDecrease() {
    if (this.state.toliks > 1) {
      this.setState({ toliks: this.state.toliks - 1 });
      this.setState({ error: null });
    } else {
      this.setState({ error: "little" });
    }
  }

  render() {
    return (
      <div className="estimate">
        <FaPlusCircle onClick={this.handleIncrease} />
        Estimate: {this.state.toliks} Toliks
        <FaMinusCircle onClick={this.handleDecrease} />
        <Error error={this.state.error} />
      </div>
    );
  }
}

export default Estimate;
