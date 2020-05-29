import React, { Component } from "react";

const DisplayWindow = (props) => {
  return <input type="text" value={props.expression} disabled={true} style={{paddingTop:10}}></input>;
};

export class Key extends Component {
  constructor() {
    super();
    this.state = { expression: "" };
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress() {
    this.props.onKeyPress(this.props.text);
  }

  render() {
    return (
      <button
        className="btn btn-secondary m-2 btn-sm"
        onClick={this.onKeyPress}
      >
        {this.props.text}
      </button>
    );
  }
}

export class Calculator extends Component {
  constructor() {
    super();
    this.state = { expression: "" };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onEvaluate = this.onEvaluate.bind(this);
    this.onAllClear = this.onAllClear.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onKeyPress(text) {
    this.setState((prev) => ({
      expression: prev.expression + text,
    }));
  }
  
  onAllClear() {
    this.setState((prev) => ({
      expression: (prev.expression = ""),
    }));
  }

  onEvaluate() {
    this.setState((prev) => ({
      expression: eval(prev.expression),
    }));
  }
  
   onDelete() {
    this.setState((prev) => ({
      expression:
        prev.expression.length <= 0
          ? ""
          : prev.expression.slice(0, prev.expression.length - 1),
    }));
  }
  render() {
    return (
      <div
        className="container"
        style={({ textAlign: "center" }, { paddingLeft: 480 })}
      >
        <DisplayWindow expression={this.state.expression} />
        <div>
          <button
            className="btn btn-secondary btn-sm"
            onClick={this.onAllClear}
            style={{ position: "relative" }}
          >
            AC
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={this.onDelete}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={this.onEvaluate}
            style={{ width: 40 }}
          >
            =
          </button>
        </div>
        <div>
          <Key text="7" onKeyPress={this.onKeyPress} />
          <Key text="8" onKeyPress={this.onKeyPress} />
          <Key text="9" onKeyPress={this.onKeyPress} />
          <Key text="/" onKeyPress={this.onKeyPress} />
        </div>
        <div>
          <Key text="4" onKeyPress={this.onKeyPress} />
          <Key text="5" onKeyPress={this.onKeyPress} />
          <Key text="6" onKeyPress={this.onKeyPress} />
          <Key text="*" onKeyPress={this.onKeyPress} />
        </div>
        <div>
          <Key text="1" onKeyPress={this.onKeyPress} />
          <Key text="2" onKeyPress={this.onKeyPress} />
          <Key text="3" onKeyPress={this.onKeyPress} />
          <Key text="-" onKeyPress={this.onKeyPress} />
        </div>
        <div>
          <Key text="0" onKeyPress={this.onKeyPress} />
          <Key text="%" onKeyPress={this.onKeyPress} />
          <Key text="+" onKeyPress={this.onKeyPress} />
          <Key text="." onKeyPress={this.onKeyPress} />
        </div>
      </div>
    );
  }
  
  }

export default DisplayWindow;
