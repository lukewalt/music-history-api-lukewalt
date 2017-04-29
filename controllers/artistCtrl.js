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

module.exports = { getArtists };
