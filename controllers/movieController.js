const movieService = require('../services/movieService');

module.exports = {
    getIndex(_, res) {
        res.render('pages/index', { movie: null });
    },

    async findMovie(req, res) {
        const { movieTitle } = req.body;
        const movie = await movieService.getMovieByTitle(movieTitle);


        res.render('pages/index', { movie });
    },

    async findPopularMovies(_, res) {
        const popular = await movieService.getPopularMovies();

        res.render('pages/popular', { popular });
    },

    async findMovieDetails(req, res) {
        const { movieId } = req.params;
        const details = await movieService.getMovieDetails(movieId);

        res.render('pages/movieDetails', { details });
    },

    async findTopRated(req, res) {
        const topRated = await movieService.getTopRated();

        res.render('pages/top-rated', { topRated });
    }
};
