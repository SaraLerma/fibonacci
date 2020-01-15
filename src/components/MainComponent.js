import React, { Component } from "react"; // asi no pones extends React.Component
import { fibonacci } from "../algorithms/fibonacci";
import "../assets/css/component.css";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: null, result: null, error: false };
    this.inputHandler = this.inputHandler.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  inputHandler(event) {
    this.setState({ number: event.target.value });
  }

  buttonClicked(){
    const numInput = this.state.number;
    if (numInput < 0) {
      this.setState({ error: true });
    } else {
      const output = fibonacci(numInput);
      this.setState({ result: output, error: false });
    }
  }

  render(){
    return(
      <section className="main-component">
        <div className="elementsRow">
          <input
            className="inputText"
            type="number"
            placeholder="Enter a number"
            onChange={this.inputHandler}
            onKeyPress={this.buttonClicked}
          ></input>
          <button id = "btnCalculate" className="btn" onClick={this.buttonClicked} >
            <b>Calculate</b>
          </button>
        </div>

        {this.state.error ? <p>ERROR: enter a positive number</p> : ""}

        <div className={this.state.result == null || this.state.number==null ? "hide" : ""}>
          <p>
            Fibonacci({this.state.number}) = {this.state.result}
          </p>
        </div>
      </section>
    );
  }
}
