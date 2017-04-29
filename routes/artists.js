'use strict';

const { Router } = require('express');
const router = Router();
const { getArtists, getOneArtist, addArtist } = require('../controllers/artistCtrl');



router.get('/artists', getArtists);
router.get('/artists/:id', getOneArtist);
router.post('/artists', addArtist);

module.exports = router;
