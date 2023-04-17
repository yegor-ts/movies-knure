const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/', movieController.getIndex);

router.post('/', movieController.findMovie);

router.get('/movie/:movieId', movieController.findMovieDetails);

router.get('/popular', movieController.findPopularMovies);

router.get('/top-rated', movieController.findTopRated);

module.exports = router;