import React from 'react';
import axios from 'axios';
import './MoviesRow.css'

const posterBase = 'https://image.tmdb.org/t/p/original/'

class MovieRow extends React.Component {
    
    constructor() {
        super()
        this.state = {
            movies:[]
        }
    }

    async componentDidMount() {
        await axios.get(`https://api.themoviedb.org/3${this.props.fetchUrl}`)
            .then((response) => {
                this.setState({movies: response.data.results});
            })
    }

    render () {
    // console.log(this.state.movies)
        return ( 
        <div className='row'>
            <h2 className='net-title'>{this.props.title}</h2>
            <div className='row-movies'>
                {this.state.movies.map((movie) => {
                    return <img 
                                className={`poster ${this.props.originalsRow && 'row-poster-large'}`}
                                src={`${posterBase}${this.props.originalsRow ? movie.poster_path : movie.backdrop_path}`} 
                                alt={movie.name} 
                                key={movie.id} />
                })}
            </div>
        </div>
        )
        }
}

export default MovieRow;