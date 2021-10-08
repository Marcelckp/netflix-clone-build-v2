import React from 'react';
import './notFound.css';

import Nav from '../components/Nav';

function NotFound() {

    return (
        <div className="notFound">
            <Nav class='blackDrop' />
            <div className='fadein'>
                <div>
                    <h1 className="title-notFound">Lost your way?</h1>
                    <p className="text-notFound">Sorry, we can't find the page you are looking for. You'll find lots to explore on the home page, click the button below to return to home.</p>
                </div>
                <div className="center-div-not">
                    <a href="/" className="home-btn"><button className="returnBtn-not">Netflix Home</button></a>
                </div>
                <div className="notFound-errorCode">
                    <span className="errorSpan">Error Code <strong>JOKER-404</strong></span>
                </div>
                <span className="image--source-notFound">FROM  <strong className='strongTag'>LOST IN SPACE</strong></span>
            </div>
        </div>
    )
}

export default NotFound;
