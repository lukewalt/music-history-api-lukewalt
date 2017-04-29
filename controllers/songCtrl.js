'use strict';

// require a song model
const { bookshelf } = require('../db/database');
const Songs = require('../models/songMd');

// use model methods for getting all songs and one song then send the response back with the data

const getSongs = (req, res, next) => {
  Songs.getAll()
  .then( allSongs => {
    res.status(200).json(allSongs);
  })
  .catch( err => {
    next(err)
  })
}

const getOneSong = ({ params: {id} }, res, next) => {
  Songs.getOne(id)
  .then( song => res.status(200).json(song))
  .catch( error => next(error))
}

const addSong = ({body}, res, next) => {
  Songs.addOne(body)
  .then( song => res.status(200).json(song))
  .catch(error => next(error))
}

module.exports = { getSongs, getOneSong, addSong };
