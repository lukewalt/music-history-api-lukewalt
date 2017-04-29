'use strict';

const { Router } = require('express');
const router = Router();
const { getArtists, getOneArtist } = require('../controllers/artistCtrl');



router.get('/artists', getArtists);
router.get('/artists/:id', getOneArtist);

module.exports = router;
