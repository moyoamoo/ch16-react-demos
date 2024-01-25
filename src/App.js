import React, { Component } from 'react';

class App  extends Component {
  btnClick = ()=>{
    console.log("button clicked")
  }

  onTextInput = (e)=>{
    console.log("user types: ", e.target.value)
  }
  render() { 
    return (<>
    <button onClick={this.btnClick}>Click me</button>
    <input type="text" onInput={this.onTextInput}></input></>);
  }
}
 
export default App ;