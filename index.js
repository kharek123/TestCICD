/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
app.get('/getUsers', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('This is test');
  res.send('Hello World');
});
app.listen(4000);
