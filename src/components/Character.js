import React from "react";
import Koala from "../images/koala.svg";
import Item1 from "../images/headband.svg";

class Character extends React.Component {
  render() {
    return (
      <div className="characterContainer">
        <img src={Koala} className="character" />
        <img src={Item1} className="item" />
      </div>
    );
  }
}

export default Character;
