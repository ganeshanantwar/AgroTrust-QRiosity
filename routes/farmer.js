const express = require('express');
const router = express.Router();
const master = require('../controllers/farmerController');

router.get('/kyconsumer/:originid', master.knowYourConsumer);
router.get('/kyharvest/:originid', master.knowYourHarvest);
router.get('/kychannel/:originid', master.knowYourChannel);
router.get('/kymarket/:originid', master.knowYourMarket);

module.exports = router;
