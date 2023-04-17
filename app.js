const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movie');
const notFoundController = require('./controllers/notFound');

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(movieRoutes);
app.use(notFoundController.getNotFound);

app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
});