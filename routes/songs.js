'use strict';


const { Router } = require('express');
const router = Router();
const { getSongs, getOneSong } = require('../controllers/songCtrl');


router.get('/songs', getSongs);
router.get('/songs/:id', getOneSong);


module.exports = router;
