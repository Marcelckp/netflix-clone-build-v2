import React, { useEffect, useState } from 'react';
import './MyList.css';
import '../../components/Banner.css';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { useHistory } from 'react-router-dom';

//components 
import Nav from '../../components/Nav';
import MyListPhoto from '../../img/strangerThings.jpg';

function MyList() {

    const history = useHistory();
    const user = useSelector(selectUser).uid;
    // console.log(user);

    const [favMovie, setFavMovie] = useState(null);

    const [displayMovie, setDisplayMovie] = useState(null);

    const [clickedMovie, setClickedMovie] = useState(null);

    const [clickedMovieDataKey, setClickedMovieDataKey] = useState(null);

    const [classToggle, setClassToggle] = useState(null);

    const [loading, setLoading] = useState(true);

    const [loadingDelete, setLoadingDelete] = useState(null);

        useEffect(() => {
            let mounted = true;
            firebase.database().ref('Account/'+ user).on('value', (snapshot) => {
                if (mounted) {
                    let moviesArr = [];
                    snapshot.forEach((childSnapshot) => {
                        moviesArr.push([childSnapshot.val(), childSnapshot._delegate.ref._path.pieces_[2]]);
                    })
                    setFavMovie((moviesArr.reverse()) || (''));

                    if (moviesArr.length > 0) {
                        setDisplayMovie(moviesArr[Math.floor(Math.random() * moviesArr.length)][0]);
                    }

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
            setClassToggle(false)
        } else {
            setClickedMovie(movie);
            setClickedMovieDataKey(DataKey);
            setClassToggle(true);
        }
    }

    // console.log(clickedMovie)
    // console.log(clickedMovieDataKey)


    const handleRemoveEntry = (e) => {
        e.preventDefault();
        setLoadingDelete(true);
        firebase.database().ref('Account/'+ user + `/${clickedMovieDataKey}`).remove().then(() => {
            setLoadingDelete(false);
            setClickedMovie(null);
        })
    }

    return (
        <div className="MyList">
            <Nav class={`${favMovie && favMovie.length === 0 ? 'blackDrop' : null}`} />
            { loading ? 
                    <div className="preloader center-preloader-onPage-myList"></div>
                : !loading && favMovie.length === 0 ?
                    <div className="your--fav-movies fadein" style={{ 
                        backgroundSize: 'cover',
                        backgroundImage: `url(${MyListPhoto})`,
                        backgroundPosition: 'center center'
                    }}>
                        <div className="myList--body">
                            <h1 className="move_down_middle center-myList-error-text">It Seem That You're Getting Ahead Of Yourself</h1>
                            <h2 className="center-myList-error-text">You Haven't Liked Any Movies Or Series Yet</h2>
                            <p className="center-myList-error-text">Go to the home page and click the add to my list button of the series you like/ want to add to your list of favorites and when you visit this page again you'll have all of your favorites displayed.</p>
                        </div>
                        <span className="image--source-notFound">FROM <strong className="strongTag">STRANGER THINGS</strong></span>
                    </div>
                :
                    <>
                        <header className="banner fadein"
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
                            { clickedMovie ? 
                                    <div className={`movieDash ${classToggle ? 'fadein' : 'fade'}`}
                                        style={{
                                            backgroundSize: 'cover',
                                            backgroundImage: `url('https://image.tmdb.org/t/p/original/${clickedMovie.backdrop_path}')`,
                                            backgroundPosition: 'center center'
                                        }}>

                                        <div className="dash-shader"></div>
                                        { loadingDelete ? 
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
                                    </div> : null }
                        </div> 
            </> }
        </div>
    )
}

export default MyList;
