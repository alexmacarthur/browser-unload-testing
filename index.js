const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require('body-parser');

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   setTimeout(() => {
//     next();
//   }, 5000);
// })

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/other', (req, res) => {
  res.sendFile(path.join(__dirname, '/other.html'));
});

app.post('/log', async (req, res) => {

  console.log(req);

  console.log('log!');
  res.json({ success: true });
});

const server = app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});

server.keepAliveTimeout = 0;
server.headersTimeout = 0;
