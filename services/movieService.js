const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const BASE_URL = 'https://api.themoviedb.org/3';
const { TMDB_API_KEY } = process.env;

module.exports = {
    async getPopularMovies() {
        const response = await axios.get(
            `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );

        return response.data.results;
    },

    async getMovieByTitle(title) {
        const response = await axios.get(
            `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${title}`
        );

        return response.data.results[0];
    },
};
