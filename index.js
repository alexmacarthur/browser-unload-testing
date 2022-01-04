const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get('/', (req, res) => {	
  res.sendFile(path.join(__dirname, '/index.html'));
  // res.json({success: true});
});

app.post('/endpoint', async (req, res) => {
  console.log('Request received!');

  return await new Promise(resolve => {
    setTimeout(() => {
      console.log('Request processed!');

      res.json({success: true});
      resolve();
    }, 3000);
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});
