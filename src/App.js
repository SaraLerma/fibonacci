import React from "react";
import spiral from "./assets/images/spiral_Fibonacci.png";
import coverwallet from "./assets/images/coverwallet-logo.svg";
import formula from "./assets/images/formula.png";
import "./assets/css/App.css"; 

import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={coverwallet} className="App-logoCoverwallet" alt="Coverwallet" />
        <a className="fa fa-github btnGit" href="https://github.com/saralerma"  title="Fork me on github"><b> GitHub</b></a>
      </header>
     
      <section className="Intro">
          <h1 className="Title-intro">Fibonacci calculator</h1>
          <img src={spiral} className="App-spiral" alt="spiral" />
          
          <p className="Description">
            <i>
            Fibonacci sequence is calculated in such a way that each 
            number is the sum of the previous two, starting with 0 and 1.
            </i>
          </p>
          <img src={formula} className="App-formula" alt="formula" />
      </section>

      <section>
        <MainComponent />
      </section>
    </div>
  );
}

export default App;
