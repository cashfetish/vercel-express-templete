const { rateLimit } = require("express-rate-limit");
const express = require("express");
const cache = require("memory-cache");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(require("sanitize").middleware);
app.use(express.json());
app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
    preflightContinue: true,
  })
);

app.set("trust proxy", 1);

app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  limit: 15,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT || 3000);
console.log("Listening on: http://localhost:" + (process.env.PORT || 3000));
module.exports = app;
