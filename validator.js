const validateEvent = (event) => {
  if (!event.eventType || !event.userId || !event.timestamp) {
    return false;
  }
  return true;
};

module.exports = { validateEvent };
