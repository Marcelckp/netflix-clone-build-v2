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
                <p>Hi my names Marcel Palmer and I'm an aspiring developer</p>
            </div>
        </div>
    )
}

export default AboutScreen;
