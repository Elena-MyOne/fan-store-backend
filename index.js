const express = require('express');

const PORT = process.env.PORT || 4200;

const app = express();

app.listen(PORT, () => {
  console.log('Server has been started on port 4200...');
});
