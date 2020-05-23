import React, { Component } from "react";
import Counter from "./Counter";

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary m-4 btn-sm">
          Reset
        </button>
        {this.state.items.map((item) => (
          <Counter key={item.id} 
            onDelete={this.props.onDelete} 
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            item={item}>
            <h5>
              Product: {item.product},Stock: {item.instock}
            </h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
