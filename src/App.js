import React from "react";
import logo from "./assets/images/spiral_Fibonacci.png";
import formula from "./assets/images/formula.gif";
import "./assets/css/App.css"; // react nos permite importar asi el css
//importo componentes
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fibonacci calculator</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fibonacci sequence, such that each number is the sum <br /> of the two
          preceding ones, starting from 0 and 1.
        </p>
        <img src={formula} className="App-formula" alt="formula" />
      </header>
      <section>
        <MainComponent />
      </section>
    </div>
  );
}

export default App;
