const express = require("express");
const app = express();
const path = require("path");

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/other', (req, res) => {
  res.sendFile(path.join(__dirname, '/other.html'));
});

app.post('/log', (req, res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => res.json({ success: true }), 1000)
  }); 
});

const server = app.listen(3000, () => {
  console.log(`Running on port 3000.`);
});

server.keepAliveTimeout = 0;
server.headersTimeout = 0;
