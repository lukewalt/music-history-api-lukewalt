'use strict';

const { bookshelf } = require('../db/database');
const Genres = require('../models/genreMd');


const getGenres = (req, res, next) => {
  Genres.getAll()
  .then( allGenres => {
    res.status(200).json(allGenres)
  })
  .catch( err => {
    next(err)
  })
}

module.exports = { getGenres };
