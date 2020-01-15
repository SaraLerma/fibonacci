import React, { Component } from "react"; // asi no pones extends React.Component
import { fibonacci } from "../algorithms/fibonacci";
import "../assets/css/component.css";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      number: 0, 
      result: { input: 0, output: -1}, 
      error: false 
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  inputHandler(event) {
    this.setState({ ...this.state, number: event.target.value });
  }

  buttonClicked(){
    const numInput = this.state.number;
    if (numInput < 0 || numInput > 1000) {
      this.setState({ ...this.state, error: true, result: {input: 0, output: -1}});
    } else {
      const output = fibonacci(numInput);
      this.setState({ ...this.state, result: {input: numInput, output: output}, error: false });
    }
  }

  onKeyPress(event) {
    if(event.key === "Enter") {
      this.buttonClicked()
    }
  }

  render(){    
    return(
      <section className="main-component">
        <div className="elementsRow">
          <input
            className="inputText"
            type="number"
            aria-label="fib-input"            
            placeholder="Enter a number"
            onChange={this.inputHandler}
            onKeyPress={this.onKeyPress}
          />
          <button 
            id="btnCalculate" 
            className="btn" 
            onClick={this.buttonClicked} 
            aria-label="calculate">
            <b>Calculate</b>
          </button>
        </div>

        {this.state.error ? <p>ERROR: Number must be positive between 0 and 1000</p> : ""}

        {this.state.result.output !== -1 ?            
            <p aria-label="result">
              Fibonacci({this.state.result.input}) = {this.state.result.output}
            </p>          
          : ""
        }        
      </section>
    );
  }
}
