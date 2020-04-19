import React from "react";

class Button extends React.Component {
  handleChange(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <button className="button" onClick={this.handleChange}>
        Change me!
      </button>
    );
  }
}
export default Button;
