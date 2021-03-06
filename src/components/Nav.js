import React, { useEffect, useState, useRef } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import './Nav.css';
import firebase from 'firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

//components
import searchIcon from '../img/searchIcon.png';
import blackSearchIcon from '../img/searchIconBlack.png';

function Nav(props) {

    const user = useSelector(selectUser).uid

    let searchVal = useRef(null);

    const [show, handleShow] = useState(false);

    let [searchClicked, setSearchClicked] = useState(false);

    const [profilePicture, setProfilePicture] = useState(null);

    const history = useHistory();
    
    const handleSearch = (e) => {

        e.preventDefault();

        // console.log(searchVal.current.value === '')

        if (searchVal.current.value === '') history.push(`/search/all`);
        else history.push(`/search/${searchVal.current.value}`);

    }

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    }

    useEffect(() => {
        let mounted = true;

        firebase.database().ref('ProfilePicture/' + user).on('value', (snapshot) => {
            if (mounted) setProfilePicture(snapshot.val());
        })

        window.addEventListener('scroll', transitionNavBar);
        return () => {
            window.removeEventListener('scroll', transitionNavBar);
            mounted = false;
        };
    });

    return (
        <div className={`nav ${show && 'nav-black'} ${props.class ? props.class : null}`}>
            <img 
                onClick={() => history.push('/')}
                className='Nav-logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" />
            <h1><NavLink exact to='/' className='nav-link'  activeClassName='activeNav'>Home</NavLink></h1>

            <h1><NavLink to='/faq' className='nav-link' activeClassName='activeNav'>F&Q</NavLink></h1>

            <h1><NavLink to='/aboutme' className='nav-link' activeClassName='activeNav'>About Me</NavLink></h1>

            <h1><NavLink to='/mylist' className='nav-link' activeClassName='activeNav'>My List</NavLink></h1>

            <div className={`search-avatar-container ${searchClicked ? 'search--div--inputBox' : ''}`}>
                { searchClicked ? 
                        <>
                            {/* <div className={`search-avatar-container ${searchClicked ? 'search--div--inputBox' : ''}`}></div> */}
                            <img src={blackSearchIcon} onClick={() => setSearchClicked(false)} alt="search icon" className='divS--search-icon fade-in' /> 
                            <input type="text" onSubmit={handleSearch} ref={searchVal} className='search--field' />
                            <button className='search--submit' onClick={handleSearch}>???</button>
                        </>
                : null}
                
                
                <img onClick={() => {

                    if (searchClicked) setSearchClicked(false);
                    else setSearchClicked(true);
                    
                }} src={searchIcon} className={`search-avatar ${searchClicked ? 'hide-img' : null}`} alt="search" />

            </div>

            { profilePicture ? 
                <img className='nav-avatar' 
                        src={profilePicture} 
                        onClick={() => history.push('/profile')}
                        alt="Profile Avatar, Click to go to the Profile page" /> 
            : 
                <img 
                onClick={() => history.push('/profile')}
                className='nav-avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar, Click to go to the Profile page" />
            }
            
        </div>
    )
}

export default Nav;