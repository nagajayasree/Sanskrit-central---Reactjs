import React, { Component } from "react";
import { getOperators } from "./values";
import getNumbers from "./values";

class Result extends Component {
  state = {
    operators: getOperators(),
    numbers: getNumbers(),
    result: 0,
  };
  render() {
    return (
      <React.Fragment>
        <div className="numbers">
          {this.state.numbers.map((n) => (
            <button
              onClick={() => this.handleNumClick(n)}
              className="btn btn-secondary m-2"
              key={n.id}
            >
              {n.value}
            </button>
          ))}
        </div>
        <div className="operators">
          {this.state.operators.map((op) => (
            <button
              onClick={() => this.handleOpClick(op)}
              className="btn btn-secondary m-2"
              key={op.id}
            >
              {op.value}
            </button>
          ))}
        </div>
        <div className="result">
          <span className={this.getBadgeClass()} style={{ width: 50 }}>
            {this.setResult()}
          </span>
          <div>
            <button className="btn btn-secondary m-2 btn-sm">Clear</button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  setResult() {
    let value = this.state.result;
    return (value = 0 ? 'Zero' : value);
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.result === 0 ? "secondary" : "primary");
  }

  handleNumClick = (n) => {
    const numbers = [...this.state.numbers];
    const input = numbers.indexOf(n);
    console.log(numbers[input].value);
  };

  handleOpClick = (op) => {
    const operators = [...this.state.operators];
    const input = operators.indexOf(op);
    console.log(operators[input].value);
  };
}

export default Result;
