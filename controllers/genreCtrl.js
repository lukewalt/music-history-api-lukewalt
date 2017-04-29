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

const getOneGenre = ({ params: {id} }, res, next) => {
  Genres.getOne(id)
  .then( genre => res.status(200).json(genre))
  .catch( error => next(error) )
}

module.exports = { getGenres, getOneGenre };
