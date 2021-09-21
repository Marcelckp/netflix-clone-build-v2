import React from 'react';
import './notFound.css';
import { useHistory, NavLink} from 'react-router-dom';

function NotFound() {

    const history = useHistory();

    return (
        <div className="notFound">
            <div className='nav blackDrop'>
                <img 
                    onClick={() => history.push('/')}
                    className='Nav-logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" />
                <h1><NavLink exact to='/' className='nav-link'  activeClassName='activeNav' onClick={() => history.push('/')}>Home</NavLink></h1>

                <h1><NavLink to='faq' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/faq')}>F&Q</NavLink></h1>

                <h1><NavLink to='contactme' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/contactme')}>Contact Me</NavLink></h1>

                <h1><NavLink to='New&Popular' className='nav-link' activeClassName='activeNav' onClick={() => history.push('/New&Popular')}>New & Popular</NavLink></h1>
                <img 
                    onClick={() => history.push('/profile')}
                    className='nav-avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar" />
            </div>
            <div>
                <h1 className="title-notFound">Lost your way?</h1>
                <p className="text-notFound">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
            </div>
            <div className="center-div-not">
                <a href="/" className="home-btn"><button className="returnBtn-not">Netflix Home</button></a>
            </div>
            <div className="notFound-errorCode">
                <span className="errorSpan">Error Code <strong>JOKER-404</strong></span>
            </div>
            <span className="image--source-notFound">FROM  <strong className='strongTag'>LOST IN SPACE</strong></span>
        </div>
    )
}

export default NotFound;
