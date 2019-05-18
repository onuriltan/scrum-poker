class PokerDb {

  constructor() {
    this.pockers = [];
    this.storyList = [];
    this.votes = [];
  }

  create(name, voterCount, storyList) {
    this.pockers.push({ name, voterCount, storyList});
    return name;
  }

  getPokers() {
    return this.pockers;
  }

  getStoryListByPokerName(name) {
    let poker = this.pockers.find(poker => poker.name === name );
  }

  getPokerByName(name) {
    return this.pockers.find(poker => poker.name === name );
  }
}


module.exports = new PokerDb(); //in memory singleton class