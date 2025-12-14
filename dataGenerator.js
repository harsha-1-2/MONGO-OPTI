const axios = require("axios");

const API_URL = "http://localhost:3000/events";

function randomEvent() {
  const eventTypes = ["login", "logout", "purchase", "click"];
  return {
    eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)],
    userId: `user_${Math.floor(Math.random() * 1000)}`,
    timestamp: new Date(),
    value: Math.floor(Math.random() * 100)
  };
}

async function generateAndSend() {
  console.log("Starting data generation...");

  for (let i = 1; i <= 5; i++) {
    const batch = Array.from({ length: 100 }, randomEvent);

    try {
      const res = await axios.post(API_URL, batch);
      console.log(`Inserted batch ${i}: ${res.data.count} events`);
    } catch (err) {
      console.error("Error sending batch:", err.message);
      process.exit(1);
    }
  }

  console.log("Data generation completed");
}

generateAndSend();
