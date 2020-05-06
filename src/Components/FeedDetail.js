import React, { Component } from 'react';
import image from './dawn.jpg';


class FeedDetail extends Component {
    render() { 
        return ( 
            <>
            <div>
                <div>
                    <h1 className='title'>Some Post Title and more post title which is longer</h1>
                    <p className='text'>Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. 
                    It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. 
                    Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; 
                    it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, 
                    alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.
                    </p>
                </div>
            </div>

            <div className="row">
                    <div className="column">
                        <div className="card">
                            <span className='video'>
                            <iframe width="232" height="130" src="https://www.youtube.com/embed/YCkpxl2WN48" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                            </span>
                            <h3 className='vtitle'>Video title</h3>
                            <h3 className='vtitle2'>Second line of the title</h3>
                            <p className='vdescp'>Description of the video</p>
                            <p className='vdescp2'>second line of the description</p>
                        </div>
                    </div>

                    <h2 className='info'>More from this author</h2>
                    <h2 className='watch'>Watch</h2>
                    <article className='f-article'>
                    <h1 className='f-tit'>Title</h1>
                    <p className='f-des'>Description</p>
                    <img className="f-pic-thumbnail" src={image}></img>
                    </article>
                </div>
            </>
        );
    }
}

export default FeedDetail;