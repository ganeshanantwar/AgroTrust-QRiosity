const express = require('express');
const router = express.Router();
const master = require('../controllers/farmerController');

router.get('/kyconsumer/:cropid/:originid', master.knowYourConsumer);
router.get('/kyharvest/:cropid/:originid', master.knowYourHarvest);
router.get('/kychannel/:cropid/:originid', master.knowYourChannel);
router.get('/kymarket/:cropid/:originid', master.knowYourMarket);

module.exports = router;
