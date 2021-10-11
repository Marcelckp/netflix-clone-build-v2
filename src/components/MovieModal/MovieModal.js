import React, { useState } from 'react';
import './MovieModal.css';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

import firebase from 'firebase';

function MovieModal(props) {

    const user = useSelector(selectUser)

    const history = useHistory();

    const [loading, setLoading] = useState(null);

    const [closeModal, setCloseModal] = useState(null);

    console.log(user);

    const addToMyList = (movie) => {
        let mounted = true; //

        setLoading(true);

        firebase.database().ref('Account/'+ user).push(props.aboutMovie).then(() => {
            if (mounted) {
                setLoading(false);
            }
        })

        return () => {
            mounted = false;
        }
    }

    return (
        <div className={`movie--modal fadein ${closeModal ? 'close--div--modal' : null}`}>

            <div className={`movie-modal-container ${closeModal ? 'close-modal' : null}`}>

                <div className="header-movie-modal" style={{

                    backgroundSize: 'cover',
                    backgroundImage: `url('https://image.tmdb.org/t/p/original/${props.aboutMovie.backdrop_path ? props.aboutMovie.backdrop_path : props.aboutMovie.poster_path}')`,
                    backgroundPosition: 'center center'

                }}>

                    <div className='modal-shader'></div>

                    <svg version='1.1' onClick={() => setCloseModal(true)} xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 13 13' className='svg-icon-faq exit--btn--modal'>
                        <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                    </svg> 

                </div>

                <div className="movie-modal-information">

                    {/* <p>about this movie</p> */}
                    <h1>{props.aboutMovie.title || props.aboutMovie.name || props.aboutMovie.original_title}</h1>
                    <p>{props.aboutMovie.overview}</p>
                    <div className='modal--btn--div'>
                        <button className='banner-btn'>Play</button>
                        <button className='banner-btn'>Add To My List</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MovieModal;
