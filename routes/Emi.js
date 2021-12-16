const express = require('express');
const router = express.Router();
const emiController = require('../controllers/EmiController');


router.post("/monthlyemi", emiController.getMonthlyEmi);
router.post("/dailyemi", emiController.getDailyEmi);
router.post("/continousemi", emiController.getContinousEmi);

module.exports = router;