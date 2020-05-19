import React, { Component } from 'react';

class CartItems extends Component { 
    state = {
        count: 0,
    }
    
    listItems(){
        return (
            <div>
                <span className={this.getBadge()}>{this.setCount()}</span>
                <button onClick={this.handleAdd} className='btn m-4 btn-secondary'>Add</button>
                <button onClick={this.handleRemove} className='btn m-4 btn-secondary'>Remove</button>
                <button className='btn m-4 btn-danger'>Delete</button>
            </div>
        );
    }
    
    handleAdd = () => {
        this.setState({count:this.state.count + 1})
    }
    
    handleRemove = () => {
        this.setState({count:this.state.count - 1})
    }
    
    render() { 
        return (
            <div>
                <div>
                    <p>No. of Items: {this.setCount()}</p>
                    <button onClick={this.resetCount} className='btn m-2 btn-primary'>Reset</button>
                    {this.listItems()}
                </div>
            </div>
        );
    }
    
    setCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
    
    resetCount = () =>{
        let {count} = this.state;
        this.setState({count: count = 0});
    }
    
    getBadge(){
        let classes = 'badge m-2 badge-';
        return classes += this.state.count === 0 ? 'warning' : 'primary';
    }
}


export default CartItems;
