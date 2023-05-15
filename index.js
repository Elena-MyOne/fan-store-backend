const express = require('express');
const mongoose = require('mongoose');

const app = express();
// app.get('/', (req, resp) => {
//   resp.send('app is working...');
// });

const connectDB = async () => {
  try {
    mongoose.connect('mongodb://localhost:27017/fan-store');
    const productSchema = new mongoose.Schema({});
    const products = mongoose.model('products', productSchema);
    const data = await products.find();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

connectDB();

app.listen(4200, () => {
  console.log('Server has been started on port 4200...');
});
