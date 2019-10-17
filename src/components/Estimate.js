import React, { Component } from "react";

export default class Estimate extends Component {
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
      this.setState({
        error: {
          image: "much",
          message: "Less than 10 please :0"
        }
      });
    }
  }

  handleDecrease() {
    if (this.state.toliks > 1) {
      this.setState({ toliks: this.state.toliks - 1 });
      this.setState({ error: null });
    } else {
      this.setState({
        error: {
          image: "little",
          message: "More than 1 please :C"
        }
      });
    }
  }

  render() {
    return (
      <div>
        Estimate: {this.state.toliks} Toliks
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <div className={["error", this.state.error && "shown"].join(" ")}>
          {this.state.error && (
            <>
              <img
                src={require(`../images/${this.state.error.image}.jpg`)}
                alt="Error notification"
              />
              {this.state.error.message}
            </>
          )}
        </div>
      </div>
    );
  }
}
