import React, { Component } from 'react';

class VideoList extends Component{
    render(){
        return (
            <>
            <h1 className='day1'>Today</h1>
                <div className="row">
                    <div className="vlcolumn">
                        <div className="vlcard">
                            <span className='videolist'>
                            <iframe width="230" height="130" src="https://www.youtube.com/embed/YCkpxl2WN48" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                            </span>
                            <a className='vlisttitle'>Video title</a>
                            <h3 className='vlisttitle2'>Second line of the title</h3>
                            <p className='vlistdescp'>Description of the video</p>
                            <p className='vlistdescp2'>second line of the description</p>
                        </div>
                    </div>
                </div>
                <h1 className='day2'>Yesterday</h1>
                <div className="row-2">
                    <div className="vlcolumn-2">
                        <div className="vlcard-2">
                            <span className='videolist-2'>
                            <iframe width="230" height="130" src="https://www.youtube.com/embed/aUURVEkszD0" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                            </span>
                            <a className='vlisttitle-2'>Video title</a>
                            <h3 className='vlisttitle2-2'>Second line of the title</h3>
                            <p className='vlistdescp-2'>Description of the video</p>
                            <p className='vlistdescp2-2'>second line of the description</p>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default VideoList;



{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/aUURVEkszD0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}