const Event = require("../models/Event");

/**
 * POST /events
 * Accepts single event or array of events
 */
async function ingestEvents(req, res, next) {
  try {
    const data = req.body;

    if (!data || (Array.isArray(data) && data.length === 0)) {
      return res.status(400).json({ error: "No event data provided" });
    }

    const events = Array.isArray(data) ? data : [data];

    await Event.insertMany(events, { ordered: false });

    res.status(201).json({
      message: "Events ingested successfully",
      count: events.length
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  ingestEvents
};
