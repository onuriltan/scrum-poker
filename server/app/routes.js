const express = require('express');
const pokerController = require('./controllers/poker.controller');

module.exports = function (app) {
  let apiRoutes = express.Router();

  apiRoutes.post('/createPoker', pokerController.createPoker)
  apiRoutes.get('/getPokerURL', pokerController.getPokerURL)
  apiRoutes.get('/getStories', pokerController.getStories)
  apiRoutes.get('/getVotes', pokerController.getVotes)
  apiRoutes.post('/makeVote', pokerController.makeVote)
  apiRoutes.post('/endVoting', pokerController.endVoting)


  app.use('/api', apiRoutes);
}