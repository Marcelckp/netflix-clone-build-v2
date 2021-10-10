import React, { useRef, useState, useEffect } from 'react';
import './SearchScreen.css';
import axios from 'axios';
import apiRequest from '../../apiRequest';

//components
import Nav from '../../components/Nav';

function SearchScreen(props) {

    const [loading, setLoading] = useState(true);
    
    const [movies, setMovies] = useState(null);

    const [initialSearch, setInitialSearch] = useState(null);

    const [matchedMoviesArr, setMatchedMoviesArr] = useState(null);

    const searchString = props.match.params.string;

    let searchValuesInput = useRef(searchString);    
    // console.log(searchValuesInput.value);

    useEffect(() => {
        let mounted = true;
        let allTheMovies = [];
        const fetchData = async () => {

            const one =  axios.get(`https://api.themoviedb.org/3${apiRequest.fetchComedyMovies}`);
            const two =  axios.get(`https://api.themoviedb.org/3${apiRequest.fetchNetflixOriginals}`);
            const three =  axios.get(`https://api.themoviedb.org/3${apiRequest.fetchTopRated}`);
            const four =  axios.get(`https://api.themoviedb.org/3${apiRequest.fetchActionMovies}`);
            const five =  axios.get(`https://api.themoviedb.org/3${apiRequest.fetchHorrorMovies}`);
            const six =  axios.get(`https://api.themoviedb.org/3${apiRequest.fetchRomanceMovies}`);
            const seven =  axios.get(`https://api.themoviedb.org/3${apiRequest.fetchDocumentaries}`);
            const eight =  axios.get(`https://api.themoviedb.org/3${apiRequest.fetchTrending}`)

            await axios.all([one,two, three, four, five, six, seven, eight]).then(axios.spread((...responses) => {
                const r1 = responses[0].data.results;
                const r2= responses[1].data.results;
                const r3 = responses[2].data.results;
                const r4 = responses[3].data.results;
                const r5 = responses[4].data.results;
                const r6 = responses[5].data.results;
                const r7 = responses[6].data.results;
                const r8 = responses[7].data.results;
                
                if (mounted) {
                    setMovies([...r1,...r2,...r3,...r4,...r5,...r6,...r7,...r8]);
                    setLoading(false);
                    allTheMovies = [...r1,...r2,...r3,...r4,...r5,...r6,...r7,...r8];
                }
            }))
        }

        fetchData().then(() => {
            console.log('hi there im done calling data');
            // console.log(movies)

            // console.log(allTheMovies)

            let foundMatches = [];

            if (searchString === 'all') foundMatches = allTheMovies;
            else if (allTheMovies) {
                allTheMovies.forEach((objectVal) => {
                    const val = (objectVal.title || objectVal.name || objectVal.original_title).toLowerCase();
                    if (val.includes(`${searchString}`)) foundMatches.push(objectVal) 
                })
            }
            // console.log(foundMatches)

            setInitialSearch(foundMatches)
        });

        return () => {
            mounted = false;
        }
    },[searchString])

// console.log(initialSearch)

    const showMatches = () => {

        let matchedMovies = [];

        // console.log(matchedMovies);
        // console.log(`${searchValuesInput.current.value}`.toUpperCase());

        if (searchValuesInput.current.value === 'all' && movies) {
            matchedMovies = movies
        } else if (movies) {
                movies.forEach((m) => {
                    const val = (m.title || m.name || m.original_title).toUpperCase();
                    const search = `${searchValuesInput.current.value}`.toUpperCase();

                    // console.log(search)
                    // console.log(val)
                    // console.log(m)
        
                    
                    if (val.includes(`${search}`)) matchedMovies.push(m);
                    // {
                    //     if (matchedMovies.length === 0) matchedMovies.push(m);
                    //     else {
                    //         matchedMovies.forEach((arr) => {
                    //             if (arr.title === m.title || arr.name === m.name) {
                    //                 return null;
                    //             } else matchedMovies.push(m)
                    //         })
                    //     }
                    // }
                    else return null;
                })
            }
        
        setMatchedMoviesArr(matchedMovies);
        // console.log(matchedMovies)
    }

    const getItemsName = (movie) => {
        console.log(movie.title || movie.name || movie.original_title);
        console.log(movie)
    }

    console.log(initialSearch)

    return (
        <>
            <Nav class='blackDrop'/>
            { loading ? 
                <div className="preloader center-preloader-onPage-myList"></div>
            :
            <div onLoad={() => showMatches()} className="SearchScreen fadein">
                <div className='search--results-container'>
                    <h1>Search Screen</h1>
                    <p>* Results for your search *</p>
                    <input onChange={showMatches} type="text" ref={searchValuesInput} defaultValue={searchString} />
                    <div className='movies--showcase'>
                        {/* <p>this is the div for the movies </p> */}

                            { matchedMoviesArr && matchedMoviesArr.length === 0 ? 
                                <p>No matches were found</p>
                            : null }

                            { matchedMoviesArr ?
                                    matchedMoviesArr.map((movie, index) => {
                                        return <div key={index} onClick={() => getItemsName(movie)} className="movies--search--div poster fadein" style={{
                                            backgroundSize: 'cover',
                                            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path }')`,
                                            backgroundPosition: 'center center'
                                        }}></div>
                                    }) 
                                : null }
                            

                            { initialSearch && !matchedMoviesArr ? 
                                initialSearch.map((movie, index) => {
                                    return <div key={index} onClick={() => getItemsName(movie)} className="movies--search--div poster fadein" style={{
                                            backgroundSize: 'cover',
                                            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : movie.poster_path }')`,
                                            backgroundPosition: 'center center'
                                        }}></div>
                                })
                            :  null}
                            
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default SearchScreen;