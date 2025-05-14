const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
// app.use(express.static(__dirname));

const path = require('path');

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/public/logo.png', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/logo.png'));
});

app.listen(process.env.PORT || 3000);
console.log("Listening on: http://localhost:" + (process.env.PORT || 3000));
module.exports = app;
