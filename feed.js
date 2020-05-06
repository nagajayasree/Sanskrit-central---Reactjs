import React, { Component } from 'react';
import './feed.css';

class Feed extends Component {
    render() { 
        const contents = [
            {title:'Some title of the item1',description:'Some smaller description'},
            {title:'Some title of the item2',description:'Some smaller description'},
            {title:'Some title of the item3',description:'Some smaller description'},
            {title:'Some title of the item4',description:'Some smaller description'},
            {title:'Some title of the item5',description:'Some smaller description'},
            {title:'Some title of the item6',description:'Some smaller description'},
        ]

        return ( 
            <div>
                {contents.map(function(content){
                    return <Item title={content.title} description={content.description} />}
                )}
            </div>
        );
    }

}

function Item(props){
    return(
        <>
        <div className='list'>
            <div className='item'>
                <article id='post'>
                    <h1 id='title'><a href='' target='_self'>{props.title}</a></h1>
                    <p id='description'>{props.description}</p>
                </article>
            </div>
        </div>
        <div>
            <img width='65' height='65' className='pic'></img>
        </div>
        </>
    )
}

export default Feed;