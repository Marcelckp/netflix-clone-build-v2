import React from 'react'

function SearchScreen(props) {

    const searchString = props.match.params.string;

    console.log(searchString);
    
    return (
        <div className="SearchScreen">
            
        </div>
    )
}

export default SearchScreen
