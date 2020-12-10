const express = require('express');
const router = express.Router();
const consumer = require('../controllers/consumerController');

router.get('/kyfarmer/:matcode/:btuid', consumer.knowYourFarmer);
router.get('/kyfood/:matcode/:btuid', consumer.knowYourFood);
router.get('/kyjourney/:matcode/:btuid', consumer.knowYourJourney);
router.get('/kymoney/:matcode/:btuid', consumer.knowYourMoney);

module.exports = router;
