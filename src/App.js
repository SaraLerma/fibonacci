import React from "react";
import spiral from "./assets/images/spiral_Fibonacci.png";
import coverwallet from "./assets/images/coverwallet-logo.svg";
import formula from "./assets/images/formula.png";
import "./assets/css/App.css"; 

import MainComponent from "./components/mainComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coverwallet} className="App-logoCoverwallet" alt="Coverwallet" />
        <div className="Intro">
          <h1>Fibonacci calculator</h1>
          <img src={spiral} className="App-spiral" alt="spiral" />
          
          <p className="Description">
            <i>
            Fibonacci sequence is calculated in such a way that each <br />
            number is the sum of the previous two, starting with 0 and 1.
            </i>
          </p>
          <img src={formula} className="App-formula" alt="formula" />
        </div>
      </header>
      <section>
        <MainComponent />
      </section>
    </div>
  );
}

export default App;
