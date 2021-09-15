import React from 'react';
import axios from 'axios';
import './MoviesRow.css'
import MovieDash from './MovieDash';

const posterBase = 'https://image.tmdb.org/t/p/original/'

class MovieRow extends React.Component {
    
    constructor() {
        super()
        this.state = {
            movies:[],
            clickedMovie: null
        }
    }

    async componentDidMount() {
        await axios.get(`https://api.themoviedb.org/3${this.props.fetchUrl}`)
            .then((response) => {
                this.setState({movies: response.data.results});
            })
    }


    render () {

        const handleClicked = (movie) => {
            if (this.state.clickedMovie && movie === this.state.clickedMovie) {
                this.setState({clickedMovie: null})
            } else {
                this.setState({clickedMovie: movie})
            }
        }

        // console.log(this.state.movies)
        return ( 
        <div className='row'>
            <h2 className='net-title'>{this.props.title}</h2>
            <div className='row-movies'>
                {this.state.movies.map((movie) => {
                    if ((this.props.originalsRow && movie.poster_path) || (!this.props.originalsRow && movie.backdrop_path)) return ( <img 
                                            className={`poster ${this.props.originalsRow && 'row-poster-large'}`}
                                            src={`${posterBase}${this.props.originalsRow ? movie.poster_path : movie.backdrop_path}`} 
                                            alt={movie.name} 
                                            onClick={() => handleClicked(movie)}
                                            key={movie.id} />)
                })}
            </div>
            {this.state.clickedMovie ? <MovieDash movie={this.state.clickedMovie} /> : null}
        </div>
        )
        }
}

export default MovieRow;