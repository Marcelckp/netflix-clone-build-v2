import React, { useEffect, useState } from 'react';
import './MyList.css';
import '../../components/Banner.css';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { useHistory } from 'react-router-dom';

//components 
import Nav from '../../components/Nav';

function MyList() {

    const history = useHistory();
    const user = useSelector(selectUser).uid;
    // console.log(user);

    const [favMovie, setFavMovie] = useState(null);

    const [displayMovie, setDisplayMovie] = useState(null);

    const [clickedMovie, setClickedMovie] = useState(null);

    const [clickedMovieDataKey, setClickedMovieDataKey] = useState(null);

    const [loading, setLoading] = useState(true);

        useEffect(() => {
            let mounted = true;
            firebase.database().ref('Account/'+ user).on('value', (snapshot) => {
                if (mounted) {
                    let moviesArr = [];
                    snapshot.forEach((childSnapshot) => {
                        moviesArr.push([childSnapshot.val(), childSnapshot._delegate.ref._path.pieces_[2]]);
                    })
                    setFavMovie((moviesArr.reverse()) || (''));
                    setDisplayMovie(moviesArr[Math.floor(Math.random() * moviesArr.length)][0]);
                    setLoading(false);
                    // console.log(moviesArr)
                }
            })

                return () => {
                    mounted = false;
                }
        },[user, history]);

    // console.log(favMovie);
    // console.log(displayMovie)

    const handleClicked = (movie, DataKey) => {
        if (clickedMovie && movie === clickedMovie) {
            setClickedMovie(null);
            setClickedMovieDataKey(null);
        } else {
            setClickedMovie(movie);
            setClickedMovieDataKey(DataKey);
        }
    }

    console.log(clickedMovie)
    console.log(clickedMovieDataKey)


    const handleRemoveEntry = (e) => {
        e.preventDefault();
        setLoading(true);
        firebase.database().ref('Account/'+ user + `/${clickedMovieDataKey}`).remove().then(() => {
            setLoading(false);
            setClickedMovie(null);
        })
    }

    return (
        <div className="MyList">
            <Nav />
            { loading ? 
                    <div className="preloader center-preloader-onPage-myList"></div>
                : !loading && favMovie.length === 0 ?
                    <p className="no-liked">You haven't licked any movies yet</p>
                :
                    <>
                        <header className="banner"
                        style={{
                            backgroundSize: 'cover',
                            backgroundImage: `url('https://image.tmdb.org/t/p/original/${displayMovie ? displayMovie.backdrop_path : null}')`,
                            backgroundPosition: 'center center'
                        }}>
                            <div className='banner-fadeBottom move_down'></div>
                        </header>
                        <div className='your--fav-movies'>
                            <h2 className="net-title row">Your Favorites</h2>
                            <div className='row-movies'>
                                {favMovie.map((movie) => {
                                    if ((movie[0].originalsRow && movie[0].poster_path) || (!movie[0].originalsRow && movie[0].backdrop_path)) {
                                        return ( 
                                            <img 
                                                className={` poster row-poster-large`}
                                                src={`https://image.tmdb.org/t/p/original/${movie[0].originalsRow ? movie[0].poster_path : movie[0].backdrop_path}`}
                                                // props={movie[1]}
                                                alt={movie[0].name} 
                                                onClick={() => handleClicked(movie[0], movie[1])}
                                                key={movie[0].id} />)
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>
                            {clickedMovie ? 
                                    <div className="movieDash"
                                        style={{
                                            backgroundSize: 'cover',
                                            backgroundImage: `url('https://image.tmdb.org/t/p/original/${clickedMovie.backdrop_path}')`,
                                            backgroundPosition: 'center center'
                                        }}>

                                        <div className="dash-shader"></div>
                                        { loading ? 
                                            <div className="preloader center-preloader"></div>
                                            : <div className="movieDashInfo">
                                                <h1>{clickedMovie.name|| clickedMovie.title||clickedMovie.original_title}</h1>

                                                <a href={`/watch/${ clickedMovie.name || clickedMovie.title || clickedMovie.original_title || '' }`}>
                                                    <button className="Dash-btn">Play</button>
                                                </a>

                                                <button className="Dash-btn" onClick={handleRemoveEntry}>Remove From List</button>

                                                <h2>Date Released: {clickedMovie.first_air_date || clickedMovie.release_date}</h2>

                                                <h3>{clickedMovie.overview}</h3>

                                                <h4>Rating: {clickedMovie.vote_average}/10</h4>
                                            </div> }
                                    </div> : null}
                        </div> 
            </> }
        </div>
    )
}

export default MyList;
