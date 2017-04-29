'use strict';

const { bookshelf } = require('../db/database');
const Albums = require('../models/albumMd');


const getAlbums = (req, res, next) => {
  Albums.getAll()
  .then( allAlbums => {
    res.status(200).json(allAlbums)
  })
  .catch( err => {
    next(err)
  })
}

const getOneAlbum = ({ params: {id} }, res, next) => {
  Albums.getOne(id)
  .then( album => {
    res.status(200).json(album)
  })
  .catch( error => next(error))
}

module.exports = { getAlbums, getOneAlbum };
