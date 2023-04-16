// const movieService = require('../services/movieService');

module.exports = {
    async getIndex(req, res) {
        res.render('pages/index', { title: 'Movie Search' });
    },
};
