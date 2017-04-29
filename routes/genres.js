'use strict';

const { Router } = require('express');
const router = Router();

const { getGenres } = require('../controllers/genreCtrl');


router.get('/genres', getGenres)

module.exports = router;
