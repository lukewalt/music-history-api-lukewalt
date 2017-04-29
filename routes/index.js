'use strict';

// require express Router and require the songs.js router file
const { Router } = require('express');
const router = Router();

// this is an example of a root document. It returns a json representation of
// all of our endpoints. (Just one endpoint exists in this tiny example app)
router.get('/', (req, res) => {
  res.json({
    "title": "The Music History API",
    "songs": "http://localhost:3000/api/v1/songs",
    "songs": "http://localhost:3000/api/v1/artists",
    "songs": "http://localhost:3000/api/v1/genres",
    "albums": "http://localhost:3000/api/v1/albums"
  });
});

router.use(require('./songs'));
router.use(require('./albums'));
router.use(require('./artists'));
router.use(require('./genres'));


module.exports = router;
