import React, { Component } from "react";
import Button from "./Components/Button";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Button text={"Button 1"} className="important" />
        <Button text={"Button 2"} className="danger" />
        <Button text={"Button 3"} className="demo" />
      </>
    );
  }
}

export default App;
