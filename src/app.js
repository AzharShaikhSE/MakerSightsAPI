// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const productRoute = require('./routes/product.route');

// initialize express
const app = express();
const PORT = process.env.PORT || 4000;

// configure middleware
app.use(cors());
app.use(bodyParser.json());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// configure routes
app.use('/product', productRoute);

// invalid route
app.use('*', (req, res) => {
  res.status(404).send('Invalid route');
});

// start the server
app.listen(PORT, () => {
    console.log(`API Server started on port ${PORT}`);
});
