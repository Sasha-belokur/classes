import React, { Component } from "react";

class Title extends Component {
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
      <>
        <h1 className="title">Project</h1>
        <input value={this.state.title} onChange={this.handleTitleChange} />
      </>
    );
  }
}

export default Title;
