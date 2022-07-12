import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!!, {this.props.fName}</h1>{" "}
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Welcome;
