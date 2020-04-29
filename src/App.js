import React from "react";
import "./styles/App.css";
// import Character from "./components/Preview";
// import Item1 from "./components/Items";
// import Item2 from "./components/Items";
import Bg from "./components/Bg";
import Preview from "./components/Preview";
import defaultBg from "./images/beach.jpg";
import rainbow from "./images/rainbow.jpg";
import tech from "./images/tech.jpg";
import sweets from "./images/sweets.jpg";
import mermaid from "./images/mermaid.jpg";
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
    if (value === "rainbow") {
      this.setState({ bg: rainbow });
    } else if (value === "tech") {
      this.setState({ bg: tech });
    } else if (value === "sweets") {
      this.setState({ bg: sweets });
    } else if (value === "mermaid") {
      this.setState({ bg: mermaid });
    } else {
      this.setState({ bg: defaultBg });
    }
  }

  render() {
    const { bg, character, item1 } = this.state;
    return (
      <div className="App">
        <Preview bg={bg} character={character} item1={item1} />
        <Bg bg={bg} bgHandler={this.bgHandler} />
      </div>
    );
  }
}

export default App;
