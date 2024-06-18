import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '7e0209c590297fb4aa416ad025a444d3'
// https://api.themoviedb.org/3/movie/157336?api_key=e803cc9761d754061d6f1df4ad44596c

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=7e0209c590297fb4aa416ad025a444d3';

const getTredingMovie = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTredingMovie,
    getMovieByGenreId
}