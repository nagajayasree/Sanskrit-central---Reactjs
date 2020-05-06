import React, { Component } from 'react';
import image from './dawn.jpg';
import PropTypes from 'prop-types';

class Feed extends Component {
    static defaultProps = {
        title: 'Some Title of the Item',
        description : 'Some Smaller Description'
    };
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }

    render() {
        return (
            <>
            {/* <div className = 'feed-post'>
                <img className="img-thumbnail" src={image}></img>
                <button className='feed-title-button'>{this.props.title}</button>
                <p className='feed-desc'>{this.props.description}</p>
            </div> */}

            <div>
                <article className='article'>
                    <h1 className='today'>Today</h1>
                    <a className='tit'>{this.props.title}</a>
                    <p className='des'>{this.props.description}</p>
                    <img className="pic-thumbnail" src={image}></img>
                </article>
            </div>

            <div>
                <article className='article-2'>
                    <h1 className='yesterday'>Yesterday</h1>
                    <a className='tit-2'>{this.props.title}</a>
                    <p className='des-2'>{this.props.description}</p>
                    <img className="pic-thumbnail-2" src={image}></img>
                </article>
            </div>
            </> 
        );
    }
}

export default Feed;

// <Fragment className='post'>
// <img className="thumbnail" src={image}></img>    
// <h1 className='title'>{this.props.title}</h1>
// <p className='desc'>{this.props.description}</p>
// </Fragment>

// const poststyle = {
    //     position: 'fixed',            
    //     alignText: 'center',
    //     position: 'absolute',
    //     background: '#EAEAEA',
    //     left: '290px',
    //     right: '400px',
    //     top: '125px',
    //     padding: '20px',
    //     display: 'block'
    // };