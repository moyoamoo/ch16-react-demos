import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    const { className, text } = this.props;
    return <button className={className}>{text}</button>;
  }
}

export default Button;
