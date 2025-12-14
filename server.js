console.log(">>> server.js started");

require("dotenv").config();
console.log(" dotenv loaded");

console.log("PORT =", process.env.PORT);
console.log("MONGODB_URI =", process.env.MONGODB_URI);

const app = require("./app");
console.log(" app loaded");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(` Server listening on port ${PORT}`);
});
