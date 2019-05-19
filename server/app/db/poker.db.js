const PokerEntity = require('./entity/poker.entity');
const StoryEntity = require('./entity/story.entity');
const VoteEntity = require('./entity/vote.entity');
const pokerUtils = require('../utils/poker.utils')

class PokerDb {

  constructor() {
    this.pokers = [];
    this.stories = [];
    this.votes = [];
  }

  createPoker(pokerName, voterCount, storyList) {
    let pokerURL = pokerUtils.createPokerURL(pokerName);
    const poker = new PokerEntity(pokerName, voterCount, pokerURL);
    this.pokers.push(poker);

    storyList.map(storyName => {
      const newStory = new StoryEntity(storyName, pokerName, "Not Voted", null)
      this.stories.push(newStory);
      for(let i = 1 ; i<=voterCount ; i++){
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
    return this.stories.reduce((stories, story) => {
      if (story.pokerName === pokerName) stories.push(story);
      return stories
    }, []);
  }

  getVotesByStoryAndPokerName(story, poker) {
    return this.votes.reduce((votes, vote) => {
      if (vote.story === story && vote.poker === poker) votes.push(vote);
      return votes
    }, []);

  }

  getPokerURL(pokerName){
    let poker = this.pokers.find(poker => poker.pokerName === pokerName)
    if(poker) return poker.pokerURL;
    else return ''
  }

  getPokerByName(name) {
    return this.pokers.find(poker => poker.name === name);
  }
}


module.exports = new PokerDb(); //in memory singleton class