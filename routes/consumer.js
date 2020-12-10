const express = require('express');
const router = express.Router();
const consumer = require('../controllers/consumerController');

router.get('/kyfarmer/:btuid', consumer.knowYourFarmer);
router.get('/kyfood/:btuid', consumer.knowYourFood);
router.get('/kyjourney/:btuid', consumer.knowYourJourney);
router.get('/kymoney/:btuid', consumer.knowYourMoney);

module.exports = router;
