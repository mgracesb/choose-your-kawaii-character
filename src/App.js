import React from "react";
import "./styles/App.css";
// import Character from "./components/Preview";
// import Item1 from "./components/Items";
// import Item2 from "./components/Items";
import Bg from "./components/Bg";
import Preview from "./components/Preview";
import defaultBg from "./images/beach.jpg";
import defaultKawaii from "./images/koala.svg";
import default1 from "./images/item1.svg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bg: defaultBg,
      character: defaultKawaii,
      item1: default1,
      // item:default2
    };
    this.bgHandler = this.bgHandler.bind(this);
  }

  bgHandler(value) {
    this.setState = { bg: value };
  }

  render() {
    const { defaultBg, character, item1 } = this.state;
    return (
      <div className="App">
        <Preview character={character} />
        <Bg />
      </div>
    );
  }
}

export default App;
