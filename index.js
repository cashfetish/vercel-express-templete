const { rateLimit } = require("express-rate-limit");
const express = require("express");
const cache = require("memory-cache");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.static(__dirname));
const path = require('path');

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000);
console.log("Listening on: http://localhost:" + (process.env.PORT || 3000));
module.exports = app;
