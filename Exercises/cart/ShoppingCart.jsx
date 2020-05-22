import React, { Component } from "react";
import Counter from "./Counter";

class ShoppingCart extends Component {
  state = {
    items: [
      { value: 0, product: "Handwash", id: 1, instock: 8 },
      { value: 0, product: "Rice", id: 2, instock: 4 },
      { value: 0, product: "PaperRoll", id: 3, instock: 5 },
      { value: 0, product: "Spinach", id: 4, instock: 7 },
      { value: 0, product: "Tomatoes", id: 5, instock: 9 },
    ],
  };

handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };

  handleReset = () => {
    const items = this.state.items.map((i) => {
      i.value = 0;
      return i;
    });
    this.setState({ items });
  };

  handleDelete = (itemid) => {
    const items = this.state.items.filter((i) => i.id !== itemid);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary m-4 btn-sm">
          Reset
        </button>
        {this.state.items.map((item) => (
          <Counter key={item.id} onDelete={this.handelDelete} onIncrement={this.handleIncrement} item={item}>
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
