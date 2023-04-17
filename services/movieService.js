const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const BASE_URL = 'https://api.themoviedb.org/3';
const { TMDB_API_KEY } = process.env;

module.exports = {
    async getPopularMovies() {
        const { data } = await axios.get(
            `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );

        return data.results;
    },

    async getMovieByTitle(title) {
        const { data } = await axios.get(
            `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${title}`
        );

        return data.results[0];
    },

    async getMovieDetails(movieId) {
        const { data } = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`);

        return data;
    },

    async getTopRated() {
        const { data } = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-us&page=1`);

        return data.results;
    }
};
