import React, { Component } from "react";

import TooSmall from "./TooSmall";
import TooLarge from "./TooLarge";
import Super from "./Super";

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
                {tooSmall && <TooSmall />}
                {tooLarge && <TooLarge />}
                {!tooSmall && !tooLarge && <Super />}
              </div>
            )}
          </Media>
        )}
      </Media>
    );
  }
}
