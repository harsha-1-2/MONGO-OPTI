const analyticsService = require("../services/analytics.service");

async function eventsByType(req, res, next) {
  try {
    const result = await analyticsService.eventsByType();
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function dailyCount(req, res, next) {
  try {
    const result = await analyticsService.dailyCount();
    res.json(result);
  } catch (err) {
    next(err);
  }
}

async function timeRangeAnalytics(req, res, next) {
  try {
    const { start, end } = req.query;
    const result = await analyticsService.timeRangeAnalytics(start, end);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  eventsByType,
  dailyCount,
  timeRangeAnalytics
};
