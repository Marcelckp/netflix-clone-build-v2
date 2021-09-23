import React from 'react';
import './AboutScreen.css'
import Nav from '../../components/Nav';
import PhotoMe from '../../img/IMG_3848.jpeg'

function AboutScreen() {

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
                <h1>About Me</h1>
                <br />
                <p>Hi my names Marcel Palmer and I'm an aspiring developer from South Africa.</p>
                
                <p>lsdfgs dlfasdgieh wpdfgj sodifjgsop fjhj'a;sdfp aosdjfjkjkjab cdefjo asdf alsdfj aeogih a df a b c d e f g h ij k lm n o p q rs t u v w x y z</p>
                <br />
                <h2>Contact Me</h2>
                <br />
                <form className='contactMe-form'>
                    <input type="text" placeholder='Please enter your name here...' />

                    <textarea placeholder='Please enter your message here...'/>
                    <button /*type="submit" */>Send</button>
                </form>
            </div>
        </div>
    )
}

export default AboutScreen;
