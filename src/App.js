import React from "react";
import "./styles/App.css";
import Character from "./components/Character";
import Item1 from "./components/Items";
import Header from "./components/Header";
import Bg from "./components/Bg";
import Preview from "./components/Preview";
import Item2 from "./components/Items2";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bg: "defaultBg",
      character: "defaultKawaii",
      item1: "defaultItem",
      item2: "defaultItem2",
    };
    this.bgHandler = this.bgHandler.bind(this);
    this.charHandler = this.charHandler.bind(this);
    this.item1Handler = this.item1Handler.bind(this);
    this.item2Handler = this.item2Handler.bind(this);
  }

  bgHandler(value) {
    this.setState({ bg: value });
  }

  charHandler(value) {
    this.setState({ character: value });
  }

  item1Handler(value) {
    this.setState({ item1: value });
  }

  item2Handler(value) {
    this.setState({ item2: value });
  }

  render() {
    const { bg, character, item1, item2 } = this.state;
    return (
      <div className="App">
        <Header />
        <Preview bg={bg} char={character} item1={item1} item2={item2} />
        <Bg bgHandler={this.bgHandler} />
        <Character charHandler={this.charHandler} />
        <Item1 item1Handler={this.item1Handler} />
        <Item2 item2Handler={this.item2Handler} />
      </div>
    );
  }
}

export default App;
