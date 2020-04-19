import React from "react";
import defaultImg from "../images/koala.svg";
// import Lion from "../images/lion.svg";
import defaultItem from "../images/headband.svg";
import RadioButton from "./RadioButton";

class Character extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: defaultImg,
      item: defaultItem,
    };
  }

  //Funciones para ca

  render() {
    return (
      <>
        <div className="kawaiiContainer">
          <img
            src={this.state.character}
            className="character"
            alt={this.state.character}
          />
          <img src={this.state.item} className="item" alt={this.state.item} />
        </div>
        <form className="formContainer">
          <RadioButton />
        </form>
      </>
    );
  }
}

export default Character;
