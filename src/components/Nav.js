import React, { useEffect, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false)

    const history = useHistory();
    
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img 
                onClick={() => history.push('/')}
                className='Nav-logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" />
            <h1><NavLink exact to='/' className='nav-link'  activeClassName='activeNav' onClick={() => history.push('/')}>Home</NavLink></h1>

            <h1><NavLink to='TV-Shows' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/TV-Shows')}>TV Shows</NavLink></h1>

            <h1><NavLink to='Movies' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/Movies')}>Movies</NavLink></h1>

            <h1><NavLink to='New&Popular' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/New&Popular')}>New & Popular</NavLink></h1>
            <img 
                onClick={() => history.push('/profile')}
                className='nav-avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
        </div>
    )
}

export default Nav
