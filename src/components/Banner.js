import React from 'react'
import apiRequest from '../apiRequest';
import axios from 'axios'
import './Banner.css'

class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            movie:[]
        }
    }

    async componentDidMount() {
        const movies = await axios.get(`https://api.themoviedb.org/3${apiRequest.fetchNetflixOriginals}`)
        this.setState({movie: movies.data.results[Math.floor(Math.random() * movies.data.results.length - 1)]})       
    }

    
    render() {
        console.log(this.state.movie)
        //Shortens the movie overview text in the header component
        function truncate(str, n) {
            return str?.length > n ? str.substr(0, n-1) + '...' : str;
        }

        return (
            <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${this.state.movie ? this.state.movie.backdrop_path : null}')`,
                backgroundPosition: 'center center'
            }}>
                <div className='banner-content'>
                    <h1 className='banner-title'>{this.state.movie.title || this.state.movie.name || this.state.movie.original_name}</h1>
                    <div className='banner-btn-div'>
                        <button className="banner-btn">Play</button>
                        <button className="banner-btn">My List</button>
                    </div>
                    <h1 className='movie-overview'>{truncate(this.state.movie.overview,160)}</h1>
                </div>
                <div className='banner-fadeBottom'></div>
            </header>
        )
    }
}

export default Banner
