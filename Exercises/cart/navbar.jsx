import React, { Component } from "react";

class NavBar extends Component { 
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
            <span className="badge badge-pill badge-secondary">
            {this.props.totalItems}
        </a>
      </nav>
    );
  }
}

export default NavBar;
