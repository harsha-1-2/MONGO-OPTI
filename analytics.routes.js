const express = require("express");
const router = express.Router();

const analyticsController = require("../controllers/analytics.controller");

router.get("/events-by-type", analyticsController.eventsByType);
router.get("/daily-count", analyticsController.dailyCount);
router.get("/time-range", analyticsController.timeRangeAnalytics);

module.exports = router;
