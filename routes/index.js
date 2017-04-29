'use strict';

// require express Router and require the songs.js router file
const { Router } = require('express');
const router = Router();

// this is an example of a root document. It returns a json representation of
// all of our endpoints. (Just one endpoint exists in this tiny example app)
router.get('/', (req, res) => {
  res.json({
    "title": "The Music History API",
    "songs": "music-history-api.herokuapp.com/musichistory/api/songs",
    "oneSong": "music-history-api.herokuapp.com/musichistory/api/songs/:id",
    "addSong": "music-history-api.herokuapp.com/musichistory/api/songs/{obj}",
    "artists": "music-history-api.herokuapp.com/musichistory/api/artists",
    "oneArtist": "music-history-api.herokuapp.com/musichistory/api/artists/:id",
    "addArtists": "music-history-api.herokuapp.com/musichistory/api/artists/{obj}",
    "genres": "music-history-api.herokuapp.com/musichistory/api/genres",
    "oneGenre": "music-history-api.herokuapp.com/musichistory/api/genres/:id",
    "addGenre": "music-history-api.herokuapp.com/musichistory/api/genres/{obj}",
    "albums": "music-history-api.herokuapp.com/musichistory/api/albums",
    "oneAlbum": "music-history-api.herokuapp.com/musichistory/api/albums/:id",
    "addAlbum": "music-history-api.herokuapp.com/musichistory/api/albums/{obj}",
    "removeAlbum": "music-history-api.herokuapp.com/musichistory/api/albums/:id"
  });
});

router.use(require('./songs'));
router.use(require('./albums'));
router.use(require('./artists'));
router.use(require('./genres'));


module.exports = router;
