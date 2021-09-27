import React from 'react';
import './ErrorScreen.css';
import { useHistory, NavLink } from 'react-router-dom';

//components
// import Nav from '../components/Nav'
function ErrorScreen() {

    const history = useHistory();
    
    return (
        <div className="errorScreen">
            <div className='nav blackDrop'>
                <img 
                    onClick={() => history.push('/')}
                    className='Nav-logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" />
                <h1><NavLink exact to='/' className='nav-link'  activeClassName='activeNav' onClick={() => history.push('/')}>Home</NavLink></h1>

                <h1><NavLink to='faq' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/faq')}>F&Q</NavLink></h1>

                <h1><NavLink to='aboutme' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/aboutme')}>About Me</NavLink></h1>

                <h1><NavLink to='mylist' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/mylist')}>My List</NavLink></h1>
                <img 
                    onClick={() => history.push('/profile')}
                    className='nav-avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
            </div>
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
