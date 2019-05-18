let poker = require('../db/PokerDb');

exports.create = async function (req, res) {
  const {name, voterCount, storyList } = req.body
  const existingPoker = poker.getPokerByName(name);
  console.log(req.body)
  if(existingPoker) {
    return res.status(403).send({error: "Poker already exists"});
  }
  let pokerName = poker.create(name, voterCount, storyList);
  return res.status(200).send({pokerName});
};

exports.storyList = async function (req, res) {
  const {pokerName} = req.query

};