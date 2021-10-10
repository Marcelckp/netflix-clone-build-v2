import React, { useRef } from 'react';
import Data from '../../movieDataApi';
import './SearchScreen.css'

//components
import Nav from '../../components/Nav';

function SearchScreen(props) {

    const searchString = props.match.params.string;

    let searchValuesInput = useRef(searchString);

    let AllMovies = [];

    // AllMovies.push(Data.ActionMovies)

    console.log(searchString);
    console.log(Data)

    console.log(AllMovies)

    return (
        <>
            <Nav />
            <div className="SearchScreen">
                <div className='search--results-container'>
                    <h1>Search Screen</h1>
                    <p>* Results for your search *</p>
                    <input type="text" ref={searchValuesInput} defaultValue={searchString} />
                </div>
            </div>
        </>
    )
}

export default SearchScreen;