import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false)

    const history = useHistory();
    
    const transitionNavBar = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        })
    }

    useEffect(() => {
        window.removeEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img 
                onClick={() => history.push('/')}
                className='Nav-logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix logo" />

            <img 
                onClick={() => history.push('/profile')}
                className='nav-avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
        </div>
    )
}

export default Nav
