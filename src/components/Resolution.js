import React, { Component } from "react";

class Media extends Component {
  state = {
    matches: window.matchMedia(this.props.query).matches
  };

  componentDidMount() {
    this.setup();
  }

  setup() {
    const media = window.matchMedia(this.props.query);

    if (media.matches !== this.state.matches) {
      this.setState({ matches: media.matches });
    }

    const listener = () => this.setState({ matches: media.matches });

    media.addListener(listener);

    this.removeListener = () => media.removeListener(listener);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.removeListener();
      this.setup();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return this.props.children(this.state.matches);
  }
}

export default class Resolution extends Component {
  render() {
    return (
      <Media query="(max-width: 500px)">
        {tooSmall => (
          <Media query="(min-width: 600px)">
            {tooLarge => (
              <div>
                <h2>Media</h2>
                <p>{tooSmall && "You wont see anything, go wider!"}</p>
                <p>{tooLarge && "You dont need so space, go narrower!"}</p>
                <p>{!tooSmall && !tooLarge && "Now it's super!"}</p>
              </div>
            )}
          </Media>
        )}
      </Media>
    );
  }
}
