const express = require("express");
const router = express.Router();

const ingestController = require("../controllers/ingest.controller");

// POST /events
router.post("/", ingestController.ingestEvents);

module.exports = router;
