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
      const vote = new VoteEntity(storyName, pokerName, "Scrum Master" , "Not Voted")
      this.votes.push(vote);

    })
    return pokerName;
  }

  voteByStoryName(storyName, pokerName, point) {
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

  makeVoteByPokerAndStory(story, poker, point, voter) {
    for(let i = 0 ; i < this.votes.length; i++){
      if(this.votes[i].story === story && this.votes[i].poker === poker
        && isNaN(this.votes[i].point) && this.votes[i].voter.includes(voter)){
        this.votes[i] = new VoteEntity(story, poker, this.votes[i].voter, point)
        break
      }
    }
    return true
  }

  getPokerByName(name) {
    return this.pokers.find(poker => poker.name === name);
  }

  getPokerURL(pokerName){
    let poker = this.pokers.find(poker => poker.pokerName === pokerName)
    if(poker) return poker.pokerURL;
    else return ''
  }

  setFinalVoteOfStory(storyName, pokerName, finalPoint) {
    for(let i = 0 ; i < this.stories.length; i++){
      if(this.stories[i].name === storyName && this.stories[i].pokerName === pokerName){
        this.stories[i] = new StoryEntity(storyName, pokerName, "Voted", finalPoint)
      }
    }
    return true
  }
}


module.exports = new PokerDb(); //in memory singleton class