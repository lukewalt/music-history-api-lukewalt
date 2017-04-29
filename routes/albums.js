'use strict';

const { Router } = require('express');
const router = Router();
const { getAlbums, getOneAlbum } = require('../controllers/albumCtrl');


router.get('/albums', getAlbums);
router.get('/albums/:id', getOneAlbum);

module.exports = router;
