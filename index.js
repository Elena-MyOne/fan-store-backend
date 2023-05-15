const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.get('/', (req, resp) => {
  resp.send('app is working...');
});

app.listen(4200, () => {
  console.log('Server has been started on port 4200...');
});
