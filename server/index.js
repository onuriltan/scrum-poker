const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./app/routes');

// Read Environment Variables
const dotenv = require('dotenv');
dotenv.config();


// Middlewares for Express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Load Routes
router(app);

// Handle SPA
app.use(express.static(__dirname + '/dist'));
app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'));


// Run the Express App
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`)
});

