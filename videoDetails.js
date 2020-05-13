import React, { Component } from 'react';
import './videoDetail.css';

class VideoDetail extends Component {
    state = {  }
    render() { 
        const videoDetail = [
            {title1:'Some video title1',title2:'Second line of the title',description:'This is description of the video',id:"https://www.youtube.com/embed/kT9sNV9iwRE"},
            {title1:'Some video title1',title2:'Second line of the title',description:'This is description of the video',id:"https://www.youtube.com/embed/kT9sNV9iwRE"}
        ] 

        const videoRight = [
            {vrtitle1:'Some video title',vrtitle2:'Second line of the title',vrid:'https://www.youtube.com/embed/CfKPn2Oczhk'},
            {vrtitle1:'Some video title',vrtitle2:'Second line of the title',vrid:'https://www.youtube.com/embed/CfKPn2Oczhk'}
        ]
        return ( 
            <div>
                {videoDetail.map(function(videoDetail){
                    return <Item title1={videoDetail.title1} title2={videoDetail.title2} description={videoDetail.description} id={videoDetail.id} />}
                    
                )}
                
                {videoRight.map(function(videoRight){
                    return <Item vrtitle1={videoRight.vrtitle1} vrtitle2={videoRight.vrtitle2}  vrid={videoRight.vrid} />}
                )}
            </div>
        );
    }
}

function Item(props){
    return(
        <div className="row">
            <div className="card">
                <div className="leftcolumn">
                    <iframe width="660" height="315" src= {props.id}
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                    picture-in-picture" allowfullscreen></iframe>
                    <h2 className='vdes-title1'>{props.title1}</h2>
                    <h5 className='vdes-title2'>{props.title2}</h5>
                    <p className='vdes'>{props.description}</p>
                </div>
            </div>
            <div className="rightcolumn">
                <div className="v-card">
                         <iframe width="200" height="174" src= {props.vrid}
                         frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                         picture-in-picture" 
                         allowfullscreen></iframe>
                    <h2 className='title1-right'>{props.vrtitle1}</h2>
                    <p className='title2-right'>{props.vrtitle2}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;
