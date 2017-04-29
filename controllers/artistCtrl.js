'use strict';

const { bookshelf } = require('../db/database');
const Artists = require('../models/artistMd');


const getArtists = (req, res, next) => {
  Artists.getAll()
  .then( allArtists => {
    res.status(200).json(allArtists)
  })
  .catch( err => {
    next(err)
  })
}

const getOneArtist = ({ params: {id} }, res, next) => {
  Artists.getOne(id)
  .then( artist => res.status(200).json(artist))
  .catch( error => next(error))
}

module.exports = { getArtists, getOneArtist };
