const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const movieController = require('./controllers/movieController');

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', movieController.getIndex);

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});