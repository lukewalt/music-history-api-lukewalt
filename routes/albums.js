'use strict';

const { Router } = require('express');
const router = Router();
const { getAlbums, getOneAlbum, addAlbum, removeAlbum } = require('../controllers/albumCtrl');


router.get('/albums', getAlbums);
router.get('/albums/:id', getOneAlbum);
router.post('/albums', addAlbum);
router.delete('/albums/:id', removeAlbum);

module.exports = router;
