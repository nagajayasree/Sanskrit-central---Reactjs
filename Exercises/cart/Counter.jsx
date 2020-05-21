import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
        {this.formatCount()}
        </span>
        <button onClick={() => this.handleIncrement()} className="btn btn-secondary m-2 btn-sm">
          Increment
        </button>
        <button onClick={() => this.handleDecrement()} className="btn btn-secondary m-2 btn-sm">
          Decrement
        </button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger m-2 btn-sm">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-5 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
