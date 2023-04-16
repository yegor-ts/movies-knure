const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const movieController = require('./controllers/movieController');

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', movieController.getIndex);
app.post('/', movieController.findMovie);
app.get('/popular', movieController.findPopularMovies);

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});