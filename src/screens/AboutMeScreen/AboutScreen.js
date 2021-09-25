import React, { useState } from 'react';
import './AboutScreen.css';
import emailjs from 'emailjs-com';

//components
import Nav from '../../components/Nav';
import PhotoMe from '../../img/IMG_3848.jpeg'
import success from '../../img/success.png'

function AboutScreen() {

    const [loading, setLoading] = useState(true);

    const [successful, setSuccessful] = useState(false);

    const [failed, setFailed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_iv9rirp','template_h8ow76s', e.target, 'user_NLpfJjcfCiqUZv0zspDly')
            .then((response) => {
                setLoading(false);
                setSuccessful(true);
                    console.log('successful');
                }, error => {
                    console.log(error);
                    setFailed(true);
            })
            .catch((error) => {
                console.log(error);
                setFailed(true);
            })
            e.target.reset()
    }

    const messageAgain = (e) => {
        e.preventDefault();
        setLoading(false);
        setSuccessful(false);
        setFailed(false);
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
                
                {loading ?  <div className="preloader center-email-block"></div> :

                    !loading && successful ? <div className="fadein popup-aboutScreen">
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
                    : !loading && failed ? <div className="failed">Message failed to send </div> :
                        <form className='contactMe-form' onSubmit={handleSubmit}>
                            <label htmlFor="nameAbout">Name</label>
                            <input type="text" id='nameAbout' name='fullName' required placeholder='Enter Your Name' />
                            
                            <label htmlFor="emailAbout">Email</label>
                            <input type="email" name='email' required placeholder='Enter Your Email' id='emailAbout'/>

                            <label htmlFor="messageAbout">Message</label>
                            <textarea required cols='30' rows='10' name='message' id='MessageAbout'/>
                            <button type='submit'>Submit</button>
                        </form>
                }
            </div>
        </div>
    )
}

export default AboutScreen;
