import React from 'react';
import './MovieDash.css';

function movieDash(props) {
    console.log('im in baby')
    return (
        <div className="movieDash"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}')`
            }}>
            <div className="movieDashInfo">
                <h1>{props.movie.name|| props.movie.title||props.movie.original_name}</h1>
                <h2>Date Released: {props.movie.first_air_date}</h2>
                <h3>{props.movie.overview}</h3>
                <h4>Rating: {props.movie.vote_average}/10</h4>
            </div>
        </div>
    )
}

export default movieDash
