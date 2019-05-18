const express = require('express');
const pokerController = require('./controllers/PokerController');

module.exports = function (app) {
  let apiRoutes = express.Router();
  apiRoutes.post('/create-poker')


  app.use('/api', apiRoutes, pokerController.create);
}