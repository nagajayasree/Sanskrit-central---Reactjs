import React, { Component } from 'react';
// import './vdetail.css';
class VideoDetail extends Component {
    render() { 
        return ( 
            <>
            <h1 className='next'>Next</h1>
            <div className = 'row'>
                <div className='videodetail'>
                    <span className='arrangevideo'>
                    <iframe width="650" height="325" src="https://www.youtube.com/embed/PdKFH-j3NDM" 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                    <h3 className='Vtitle1'>Video title</h3>
                    <h3 className='Vtitle2'>Second line of the title</h3>
                    <span>
                    <p className='Vdesc'>Lorem ipsum dolor sit amet, usu id enim quidam intellegebat, ferri ullum summo vel ut, ceteros delicatissimi ei vel. An vel nisl officiis disputando, vero vituperatoribus vel ei, has ad tritani interpretaris. Sit nisl commodo te, pro eu laudem omittantur liberavisse. Id eum dolor molestiae, his eu minim accusam vituperatoribus.
Vis ad nulla ridens probatus, ne cum decore omnium. Exerci mandamus dissentiunt sed ei, usu tantas electram intellegebat an. Ius quem laudem ex, te alia vidit scribentur sit. Vide magna dicit his id, vel modo everti reprehendunt at. Per melius animal ex. Tempor dissentiunt eos ei, habemus copiosae per in. Mel cu possit deseruisse, vel ut inermis iracundia.
{/* Ad dolorem repudiandae delicatissimi sit, sea brute veritus partiendo ea. Et idque mediocrem vis. Aeterno recusabo ne per. Stet reprehendunt sit ei, putant conclusionemque in eum.Eu pro suas vidit, solum blandit est in. No postea reprimique contentiones nam, id assum consetetur duo. Facer nonumy maiestatis an usu, graece omnium ne vim. Utamur volutpat dissentias pro te. 
In ius detraxit pericula conceptam, tale feugait nam te.Sea no audire offendit, an vim patrioque omittantur. Dicunt patrioque mei eu, splendide scripserit eos te. Sed ex error fuisset. Ex vero liber delicata ius. Qui ad eros fugit, ea augue menandri nec. */}
                    </p>
                    </span>
                    </span>
                    
                    <div className="row">
                    <div className="column">
                        <div className="card">
                            <span className='video'>
                            <iframe width="229" height="130" src="https://www.youtube.com/embed/YCkpxl2WN48" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                            </span>
                            <h3 className='vtitle'>Video title</h3>
                            <h3 className='vtitle2'>Second line of the title</h3>
                            <p className='vdescp'>Description of the video</p>
                            <p className='vdescp2'>second line of the description</p>
                        </div>
                    </div>
                    </div>
                    {/* <div className="row">
                    <div className="column">
                        <div className="card">
                            <span className='video'>
                            <iframe width="229" height="130" src="https://www.youtube.com/embed/YCkpxl2WN48" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                            </span>
                            <h3 className='vtitle'>Video title</h3>
                            <h3 className='vtitle2'>Second line of the title</h3>
                            <p className='vdescp'>Description of the video</p>
                            <p className='vdescp2'>second line of the description</p>
                        </div>
                    </div>
                    </div> */}

                </div>
            </div>
            </>
        );
    }
}
 
export default VideoDetail;