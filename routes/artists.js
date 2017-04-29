'use strict';

const { Router } = require('express');
const router = Router();
const { getArtists } = require('../controllers/artistCtrl');



router.get('/artists', getArtists);

module.exports = router;
