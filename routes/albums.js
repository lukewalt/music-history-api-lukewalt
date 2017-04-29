'use strict';

const { Router } = require('express');
const router = Router();
const { getAlbums } = require('../controllers/albumCtrl');


router.get('/albums', getAlbums);

module.exports = router;
