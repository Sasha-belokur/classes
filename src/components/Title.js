import React, { Component } from "react";

export default class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "React Classes"
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <div className="title">
        Project:
        <input value={this.state.title} onChange={this.handleTitleChange} />
      </div>
    );
  }
}
