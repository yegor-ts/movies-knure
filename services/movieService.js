const axios = require('axios');

const BASE_URL = 'https://api.themoviedb.org/3';
const { TMDB_API_KEY } = process.env;

module.exports = {
    async searchMovies(query) {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: TMDB_API_KEY,
                query,
            },
        });

        return response.data.results;
    },

    async getMovie(id) {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: TMDB_API_KEY,
            },
        });

        return response.data;
    },
};