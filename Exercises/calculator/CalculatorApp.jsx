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
    this.onEvaluatePress = this.onEvaluatePress.bind(this);
    this.onClear = this.onClear.bind(this);
  }
  onKeyPress(text) {
    this.setState((prev) => ({
      expression: prev.expression + text,
    }));
  }
  
  onClear() {
    this.setState((prev) => ({
      expression: (prev.expression = ""),
    }));
  }

  onEvaluatePress() {
    this.setState((prev) => ({
      expression: eval(prev.expression),
    }));
  }
  render() {
    return (
      <div
        className="container"
        style={({ textAlign: "center" },{ paddingLeft: 460})}
      >
        <DisplayWindow expression={this.state.expression} />
        <div>
          <Key text="+" onKeyPress={this.onKeyPress} />
          <Key text="-" onKeyPress={this.onKeyPress} />
          <Key text="0" onKeyPress={this.onKeyPress} />
          <button
            className="btn btn-secondary btn-sm"
            onClick={this.onClear}
            style={{ position: 'relative' }}
          >
            C
          </button>
        </div>
        <div>
          <Key text="1" onKeyPress={this.onKeyPress} />
          <Key text="2" onKeyPress={this.onKeyPress} />
          <Key text="3" onKeyPress={this.onKeyPress} />
          <Key text="*" onKeyPress={this.onKeyPress} />
        </div>
        <div>
          <Key text="4" onKeyPress={this.onKeyPress} />
          <Key text="5" onKeyPress={this.onKeyPress} />
          <Key text="6" onKeyPress={this.onKeyPress} />
          <Key text="/" onKeyPress={this.onKeyPress} />
        </div>
        <div>
          <Key text="7" onKeyPress={this.onKeyPress} />
          <Key text="8" onKeyPress={this.onKeyPress} />
          <Key text="9" onKeyPress={this.onKeyPress} />
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={this.onEvaluatePress}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default DisplayWindow;
