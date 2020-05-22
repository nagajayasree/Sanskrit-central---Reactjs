import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
        {this.formatCount()}
        </span>
        <button onClick={() => this.props.onIncrement(this.props.item)} className="btn btn-secondary m-2 btn-sm">
          Increment
        </button>
        <button onClick={() => this.onDecrement(this.props.item)} className="btn btn-secondary m-2 btn-sm">
          Decrement
        </button>
        <button onClick={() => this.props.onDelete(this.props.item.id)} className="btn btn-danger m-2 btn-sm">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.props.item.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.item;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
