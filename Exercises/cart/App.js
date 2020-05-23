import React, { Component } from "react";
import NavBar from "./cart/navbar";
import ShoppingCart from "./cart/ShoppingCart";

class App extends Component {
  state = {
    items: [
      { value: 0, product: "Handwash", id: 1, instock: 8, price: 95 },
      { value: 0, product: "Rice", id: 2, instock: 4, price: 125 },
      { value: 0, product: "PaperRoll", id: 3, instock: 5, price: 60 },
      { value: 0, product: "Spinach", id: 4, instock: 7, price: 20 },
      { value: 0, product: "Tomatoes", id: 5, instock: 9, price: 15 },
    ],
  };

  handleIncrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    items[index].value++;
    this.setState({ items });
  };

  handleDecrement = (item) => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = { ...item };
    if (items[index].value > 0) {
      items[index].value--;
    }
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
      <React.Fragment>
        <NavBar
          totalItems={this.state.items.filter((i) => i.value > 0).length}
        />
        <main className="container">
          <ShoppingCart
            items={this.state.items}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
