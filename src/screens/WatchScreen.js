import React, { useState, useEffect } from 'react';
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube';
import './WatchScreen.css';
import { useHistory, NavLink } from 'react-router-dom';

//components
import Nav from '../components/Nav';

function WatchScreen(props) {

    const history = useHistory();

    const movieName = props.match.params.id
    console.log(movieName)

    const [loading, setLoading] = useState(false);
    const [movieId, setMovieId] = useState(null);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    useEffect(() => {
        movieTrailer(movieName)
            .then((url) => {
                const YTparams = new URLSearchParams(new URL(url).search);
                setMovieId(YTparams.get('v'));
            }).catch((error) => {
                console.log(error);
                history.push('/error')
            })
    })

    return (
        <>
            <div className='fadeOut hidden nav blackDrop'>
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
            <div className="WatchScreen--player">
                
                <Youtube className="movie--player" videoId={movieId} opts={opts} />

                <div className="fadeout yt-panel-cover">
                    <h1 className="WatchScreen-movie-title">{props.match.params.id}</h1>
                    <a href="/" className="home-btn"><button className='returnBtn-not place-return-btn'>Return Home</button></a>
                </div>
                
            </div>
        </>
    )
}

export default WatchScreen
