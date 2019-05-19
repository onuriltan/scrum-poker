const PokerEntity = require('./entity/poker.entity');
const StoryEntity = require('./entity/story.entity');
const VoteEntity = require('./entity/vote.entity');
const pokerUtils = require('../utils/poker.utils')

class PokerDb {

  constructor() {
    this.pockers = [];
    this.stories = [];
    this.votes = [];
  }

  createPoker(pokerName, voterCount, storyList) {
    let pokerURL = pokerUtils.createPokerURL(pokerName);
    const poker = new PokerEntity(pokerName, voterCount, pokerURL);
    this.pockers.push(poker);

    storyList.map(storyName => {
      const newStory = new StoryEntity(storyName, pokerName, "Not Voted", null)
      this.stories.push(newStory);
      for(let i = 0 ; i<=voterCount ; i++){
        const vote = new VoteEntity(storyName, pokerName, "Voter "+i , "Not Voted")
        this.votes.push(vote);
      }
    })
    return pokerName;
  }

  voteByStoryName(storyName, point) {
    const vote = new VoteEntity(storyName, point)
    this.votes.push(vote)
  }

  getStoryListByPokerName(pokerName) {
    return this.stories.reduce(function (stories, story) {
      if (story.pokerName === pokerName) stories.push(story);
      return stories
    }, []);
  }

  getVotesByStoryAndPokerName(story, poker) {
    return this.votes.map(vote => vote.story === story && vote.poker === poker)
  }

  getPokerByName(name) {
    return this.pockers.find(poker => poker.name === name);
  }
}


module.exports = new PokerDb(); //in memory singleton class