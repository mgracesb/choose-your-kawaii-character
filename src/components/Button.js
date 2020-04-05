import React from "react";

class Button extends React.Component {
  handleChange = (evt) => preventDefault(evt);

  render() {
    return (
      <button className="button" onClick={handleChange}>
        Change me!
      </button>
    );
  }
}
export default Button;
