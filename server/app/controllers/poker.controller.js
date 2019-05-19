let pokerDb = require('../db/poker.db');
let StoryModel = require('../models/story.model')

exports.createPoker = async function (req, res) {
  const {name, voterCount, storyList} = req.body
  const existingPoker = pokerDb.getPokerByName(name);
  if (existingPoker) {
    return res.status(403).send({error: "Poker already exists"});
  }
  let pokerName = pokerDb.createPoker(name, voterCount, storyList);
  return res.status(200).send({pokerName});
};

exports.getStories = async function (req, res) {
  const {poker} = req.query
  let storyEntites = pokerDb.getStoryListByPokerName(poker);
  let stories = storyEntites.map(entity => {
    return new StoryModel(entity.name, entity.point, entity.status)
  })

  return res.status(200).send(stories);
};

exports.getVotes = async function (req, res) {
  const {poker, story} = req.query
  let voteEntities = pokerDb.getVotesByStoryAndPokerName(poker, story);
  return res.status(200).send(voteEntities);
};

