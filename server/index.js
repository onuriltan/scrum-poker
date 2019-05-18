const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

// Read Environment Variables
const dotenv = require('dotenv');
dotenv.config();


// Middlewares for Express
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('tiny'));
app.use(cors());


// Run the Express App
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});
