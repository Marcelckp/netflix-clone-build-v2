import apiRequest from "./apiRequest";

let ComedyMovies = fetch(`https://api.themoviedb.org/3${apiRequest.fetchComedyMovies}`)
    .then(response => response.json())


let NetflixOriginals = fetch(`https://api.themoviedb.org/3${apiRequest.fetchNetflixOriginals}`)
    .then(response => response.json())


let TopRated = fetch(`https://api.themoviedb.org/3${apiRequest.fetchTopRated}`)
    .then(response => response.json())


let ActionMovies = fetch(`https://api.themoviedb.org/3${apiRequest.fetchActionMovies}`)
    .then((response) => response.json())


let HorrorMovies = fetch(`https://api.themoviedb.org/3${apiRequest.fetchHorrorMovies}`)
    .then((response) => response.json())


let RomanceMovies = fetch(`https://api.themoviedb.org/3${apiRequest.fetchRomanceMovies}`)
    .then((response) => response.json())


let Documentaries = fetch(`https://api.themoviedb.org/3${apiRequest.fetchDocumentaries}`)
    .then((response) => response.json())


let trendingMovies = [];
(async() => {
    await fetch(`https://api.themoviedb.org/3${apiRequest.fetchTrending}`).then((response) => {
        const data = response.json();
        trendingMovies.push(data.result);
    })
})()

const AllMoviesObjects = { ActionMovies, TopRated, trendingMovies, Documentaries, RomanceMovies, HorrorMovies, NetflixOriginals, ComedyMovies }

export default AllMoviesObjects;