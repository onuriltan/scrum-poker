let poker = require('../models/Poker');

exports.create = async function (req, res) {
  const {name, voterCount, storyList } = req.body
  const existingPoker = poker.getPokerByName(name);
  console.log(req.body)
  if(existingPoker) {
    return res.status(403).send({error: "Poker already exists"});
  }
  poker.create(name, voterCount, storyList);
  return res.sendStatus(200);
};