const movieService = require('../services/movieService');

module.exports = {
    getIndex(_, res) {
        res.render('pages/index', { movie: null });
    },

    async findMovie(req, res) {
        const { movieTitle } = req.body;
        const movie = await movieService.getMovieByTitle(movieTitle);


        res.render('pages/index', { movie: movie });
    },

    async findPopularMovies(req, res) {
        const popular = await movieService.getPopularMovies();

        res.render('pages/popular', { movies: popular });
    }
};
