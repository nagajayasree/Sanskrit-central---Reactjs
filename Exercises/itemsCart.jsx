import React, { Component } from 'react';
import { getItems } from "./itemList";

class CartItems extends Component { 
    state = {
        total: 0,
        items: getItems(),
    };
    
    handleAdd = () => {
    }
    
    handleRemove = () => {
    }
    
    handleDelete = (item) => {
    // const items = this.state.items.filter((i) => i.id !== item.id);
    // this.setState({ items });
    };
    
    render() { 
        const { length: count } = this.state.items;

    if (count === 0) return <p>There are no items in the Cart</p>;

    return (
      <React.Fragment>
        <p>No. of items in the cart are {this.setCount()}</p>
        <span onClick={this.resetCount} className="btn m-2 btn-primary">
          Reset
        </span>
        <table>
          <tbody>
            {this.state.items.map((item) => (
              <tr key={item.id}>
                <h5>
                  <span className="badge m-2">
                    Product:{item.product},InStock:{item.instock}
                    <p className={this.getBadge()}>{item.count}</p>
                    <button onClick={this.handleAdd} className="btn m-4 btn-secondary">
                      Add
                    </button>
                    <button onClick={this.handleRemove} className="btn m-4 btn-secondary">
                      Remove
                    </button>
                    <button onClick={this.handleDelete(item)} className="btn m-4 btn-danger">
                      Delete
                    </button>
                  </span>
                </h5>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
    }
    
    setCount(){
        const {total} = this.state;
        return total === 0 ? 'Zero' : total;
    }
    
    resetCount = () =>{
        let {total} = this.state;
        this.setState({total: total = 0});
    }
    
    getBadge(){
        let classes = 'badge m-2 badge-';
        return classes += this.state.total === 0 ? 'warning' : 'primary';
    }
}

export default CartItems;
