import React from 'react';
import './ErrorScreen.css';

//components
import Nav from '../components/Nav';

function ErrorScreen() {
    
    return (
        <div className="errorScreen">
            <Nav class='blackDrop'/>
            <div className='fadein'>
                <div>
                    <h1 className='title-errorPage'>Pardon the interruption</h1>
                    <p className="text-errorPage">
                        We were unable to process your request, Please go to the Netflix home page by clicking the button below
                    </p>
                </div>
                <div className="center-div-not">
                    <a href="/" className="home-btn"><button className="returnBtn-not">Netflix Home</button></a>
                </div>
                <div className="notFound-errorCode">
                    <span className='errorSpan'>Error Code <strong>REKOJ-500</strong></span>
                </div>
                <span className="image--source-notFound">FROM  <strong className='strongTag'>MINDHUNTER</strong></span>
            </div>
        </div>
    )
}

export default ErrorScreen;
