import React, { useState } from 'react';
import './MovieDash.css';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function MovieDash(props) {
    // console.log(props.class)
    const [loading, setLoading] = useState(false);
    // const [movieKey, setMovieKey] = useState(0);

    const movie = props.movie
    const user = useSelector(selectUser).uid;
        // console.log(user)
        // console.log(movie)

    const addToMyList = (e) => {
        let mounted = true;
        setLoading(true)

        // console.log(loading);
        
        firebase.database().ref('Account/' + user).push(movie).then(() => {
            if (mounted) {
            setLoading(false);
            }
        })
        
        return () => {
            mounted = false;
        }
    }

    // console.log(movieKey)

    return (
        <div className={`movieDash ${props.class ? props.class : null}`}
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}')`,
                backgroundPosition: 'center center'
            }}>

            <div className="dash-shader"></div>
            { loading ? 
                <div className="preloader center-preloader"></div>
                : <div className="movieDashInfo">
                    <h1>{props.movie.name|| props.movie.title||props.movie.original_title}</h1>

                    <a href={`/watch/${ props.movie.name || props.movie.title || props.movie.original_title || '' }`}>
                        <button className="Dash-btn">Play</button>
                    </a>

                    <button className="Dash-btn" onClick={addToMyList}>Add to My List</button>

                    <h2>Date Released: {props.movie.first_air_date || props.movie.release_date}</h2>

                    <h3>{props.movie.overview}</h3>

                    <h4>Rating: {props.movie.vote_average}/10</h4>
                </div> }
        </div>
    )
}

export default MovieDash;
