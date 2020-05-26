//Rendering button values using slice and map methods

import React, { Component } from "react";
import getNumbers from "./numbers";

class Calculator extends Component {
  state = {
    numbers: getNumbers(),
  };
  render() {
        return (
      <div className="calculator" style={{ padding: 50 }}>
        <div className="calculator-screen">
          <input
            className="result"
            style={{ border: "none" }}
            value=""
            disabled
          />
        </div>
        <div>
          {this.state.numbers.slice(0,3).map((n) => (
            <button className="btn btn-secondary m-2" key={n.id}>
              {n.value}
            </button>
          ))}
        </div>
        <div>
          {this.state.numbers.slice(3,7).map((n) => (
            <button className="btn btn-secondary m-2" key={n.id}>
              {n.value}
            </button>
          ))}
        </div>
        <div>
          {this.state.numbers.slice(7,11).map((n) => (
            <button className="btn btn-secondary m-2" key={n.id}>
              {n.value}
            </button>
          ))}
        </div>
        <div>
          {this.state.numbers.slice(11,15).map((n) => (
            <button className="btn btn-secondary m-2" key={n.id}>
              {n.value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
