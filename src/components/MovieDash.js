import React from 'react';
import './MovieDash.css';

function movieDash(props) {
    // console.log('im in baby')
    return (
        <div className="movieDash"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}')`,
                backgroundPosition: 'center center'
            }}>
            <div className="dash-shader"></div>
            <div className="movieDashInfo">
                <h1>{props.movie.name|| props.movie.title||props.movie.original_title}</h1>
                <button className="Dash-btn">Play</button>
                <button className="Dash-btn">My List</button>
                <h2>Date Released: {props.movie.first_air_date || props.movie.release_date}</h2>
                <h3>{props.movie.overview}</h3>
                <h4>Rating: {props.movie.vote_average}/10</h4>
            </div>        
        </div>
    )
}

export default movieDash
