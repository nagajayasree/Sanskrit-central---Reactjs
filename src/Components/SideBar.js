import React, { Component } from 'react';
import logo from './sclogo.png';
// import { browserHistory } from 'react-router';

class SideNav extends Component {
    render() { 
        return (
            <>
            <nav className='sidenav'>
            <img className="logo" src={logo}></img>
            <a href="feed">Feed</a>
            <a href="videos">Videos</a>
            <p href="about"><span>About</span></p>
            <small href="copyright"><span>Copyright 2020</span></small>
            </nav> 
            <div>
                {this.props.children}
            </div>
            </>
        );
    }
}

export default SideNav;