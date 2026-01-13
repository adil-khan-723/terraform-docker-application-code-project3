const express = require("express");

const app = express();

/* ===============================
   Runtime configuration
================================ */
const PORT = process.env.PORT || 5001;
const ENV = process.env.ENV || "unknown";
const VERSION = process.env.VERSION || "unknown";
const MESSAGE = process.env.MESSAGE || "Hello from backend";

/* ===============================
   Local-dev CORS handling
   (Required for browser -> different port)
   NOT needed in ECS prod
================================ */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/* ===============================
   Routes
================================ */

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/api/message", (req, res) => {
  res.json({
    service: "backend",
    env: ENV,
    version: VERSION,
    message: MESSAGE
  });
});

/* ===============================
   Server start
================================ */
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});