'use strict';


const { Router } = require('express');
const router = Router();
const { getSongs, getOneSong, addSong } = require('../controllers/songCtrl');


router.get('/songs', getSongs);
router.get('/songs/:id', getOneSong);
router.post('/songs', addSong);


module.exports = router;
