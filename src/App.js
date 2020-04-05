import React from "react";
import "./styles/App.css";
import Preview from "./Preview";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Preview />
        <Button />
      </div>
    );
  }
}

export default App;
