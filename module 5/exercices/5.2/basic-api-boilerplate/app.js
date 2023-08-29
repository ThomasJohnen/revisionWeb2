const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');

const filmsRouter = require('./routes/films');

const corsOptions = {
  origin: 'http://localhost:8080',
};

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/films', filmsRouter);
app.use('/films', cors(corsOptions), filmsRouter);


module.exports = app;
