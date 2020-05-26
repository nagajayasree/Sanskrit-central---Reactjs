import React, { Component } from "react";
import getNumbers from "./numbers";

class Calculator extends Component {
  state = {
    numbers: getNumbers(),
    showElements: 3,
  };
  render() {
    const elements = this.state.numbers
      .slice("0", "this.state.showElements")
      .map((number) => <div>{number}</div>);
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
          {this.state.numbers.slice(0, this.state.showElements).map((n) => (
            <button className="btn btn-secondary m-2" key={n.id}>
              {n.value}
            </button>
          ))}
        </div>
        <div>
          {this.state.numbers.slice(3, this.state.showElements+4).map((n) => (
            <button className="btn btn-secondary m-2" key={n.id}>
              {n.value}
            </button>
          ))}
        </div>
        <div>
          {this.state.numbers.slice(7, this.state.showElements+8).map((n) => (
            <button className="btn btn-secondary m-2" key={n.id}>
              {n.value}
            </button>
          ))}
        </div>
        <div>
          {this.state.numbers.slice(11, this.state.showElements+12).map((n) => (
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
