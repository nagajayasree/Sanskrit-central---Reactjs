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

  handleDelete = (itemid) => {
    const items = this.state.items.filter((i) => i.id !== itemid);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        {this.state.items.map((item) => (
          <Counter key={item.id} value = {item.value} product={item.product} id={item.id} instock={item.instock}>
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
