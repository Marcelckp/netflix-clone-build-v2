import React, { useState } from 'react';
import './AboutScreen.css'
import Nav from '../../components/Nav';
import PhotoMe from '../../img/IMG_3848.jpeg'
import success from '../../img/success.png'

function AboutScreen() {

    const [submitted, setSubmitted] = useState(false);

    // const [messageAgain, setMessageAgain] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const messageAgain = (e) => {
        e.preventDefault();
        setSubmitted(false);
    }

    return (
        <div className="AboutScreen">
            <Nav />
            <header className="banner"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url(${PhotoMe})`,
                            backgroundPosition: 'center center'
                        }}>
                            <div className='banner-fadeBottom move_down'></div>
                        </header>
            <div className="AboutScreen-container">
                <h1>A Little About Me</h1>
                <br />
                <p>Hi my names Marcel Palmer and I'm an aspiring developer from South Africa, focused on Frontend Development but can work my way around the back end.</p>
                <br />
                <h2>Contact Me</h2>
                <br />
                
                {submitted ? 
                        <div className="fadein popup-aboutScreen">
                            <img src={success} alt="successful" className="success-icon-aboutScreen" />
                            <div className="title-aboutScreen">
                                <p>Success!</p>
                            </div>
                            <div className="description-aboutScreen">
                                <p>Thank you for contacting me /sending a message, it was successfully sent to me & I'll make sure to reply soon, so check your inbox in the coming days.</p>
                            </div>
                            <div className="messageAgain-btn">
                                <button id='messageAgain-popup-btn' onClick={messageAgain}>
                                    Send Another Message
                                </button>
                            </div>
                        </div>
                    :
                        <form /*action='#'*/ className='contactMe-form' /*method='post'*/ >
                            <label htmlFor="nameAboutScreen">Name</label>
                            <input type="text" id='nameAboutScreen' required placeholder='Enter Your Name' />
                            
                            <label htmlFor="emailAboutScreen">Email</label>
                            <input type="email" required placeholder='Enter Your Email' id='emailAboutScreen'/>

                            <label htmlFor="messageAboutScreen">Message</label>
                            <textarea required cols='30' rows='10' id='messageAboutScreen'/>
                            <button onClick={handleSubmit}>Submit</button>
                        </form>
                }
            </div>
        </div>
    )
}

export default AboutScreen;
