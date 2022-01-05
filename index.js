const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   setTimeout(() => {
//     next();
//   }, 5000);
// })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/other-page', (req, res) => {
  res.sendFile(path.join(__dirname, '/index2.html'));
});

app.post('/endpoint', async (req, res) => {
  console.log('Request received!');

  res.set("Connection", "close");

  return await new Promise(resolve => {
    setTimeout(() => {
      console.log('Request processed!');

      res.json({success: true});
      resolve();
    }, 3000);
  });
});

const server = app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});

server.keepAliveTimeout = 0;
server.headersTimeout = 0;
