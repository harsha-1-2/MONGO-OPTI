const Event = require("../models/Event");

/**
 * Count events grouped by eventType
 */
async function eventsByType() {
  return Event.aggregate([
    {
      $group: {
        _id: "$eventType",
        count: { $sum: 1 }
      }
    }
  ]);
}

/**
 * Daily event count
 */
async function dailyCount() {
  return Event.aggregate([
    {
      $project: {
        date: {
          $dateToString: { format: "%Y-%m-%d", date: "$timestamp" }
        }
      }
    },
    {
      $group: {
        _id: "$date",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]);
}

/**
 * Time-range based analytics
 */
async function timeRangeAnalytics(start, end) {
  const match = {};

  if (start || end) {
    match.timestamp = {};
    if (start) match.timestamp.$gte = new Date(start);
    if (end) match.timestamp.$lte = new Date(end);
  }

  return Event.aggregate([
    { $match: match },
    {
      $group: {
        _id: "$eventType",
        count: { $sum: 1 }
      }
    }
  ]);
}

module.exports = {
  eventsByType,
  dailyCount,
  timeRangeAnalytics
};
