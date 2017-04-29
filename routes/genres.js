'use strict';

const { Router } = require('express');
const router = Router();

const { getGenres, getOneGenre } = require('../controllers/genreCtrl');


router.get('/genres', getGenres)
router.get('/genres/:id', getOneGenre)

module.exports = router;
