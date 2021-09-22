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

    const [favMovie, setFavMovie] = useState('');
    const [loading, setLoading] = useState(true);
        
    
        useEffect( async() => {
                await firebase.database().ref('Account/'+user).on('value', (snapshot) => {
                    if (!snapshot.val()) return null;
                    else {setFavMovie(snapshot.val().likedMovies);
                    setLoading(false);}
                },
                error => {
                    console.log(error);
                    history.push('/error');
                })
        },[user, history])

    // const poster = favMovie.backdrop_path || favMovie.poster_path || null;
    // console.log(favMovie);

    return (
        <div className="MyList">
            <Nav />
            <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${favMovie ? favMovie.backdrop_path : null}')`,
                backgroundPosition: 'center center'
            }}>
                <div className='banner-fadeBottom move_down'></div>
            </header>
            <div className='your--fav-movies'>
                <div className='myList--body'>
                    <h1>Your Current Favorite</h1>
                    <p>Coming Soon...</p>
                    <br />
                    <br />
                    <p>But in the meantime your current favorite series/movie is </p>
                    <p>* -- {favMovie.name || favMovie.title || favMovie.original_title} -- *</p>
                </div>
            </div>
        </div>
    )
}

export default MyList;
