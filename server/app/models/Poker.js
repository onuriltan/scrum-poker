class Poker {

  constructor() {
    this.pockers = [];
  }

  create(name, voterCount, storyList) {
    this.pockers.push({ name, voterCount, storyList});
  }

  getPokers() {
    return this.pockers;
  }

  getPokerByName(name) {
    return this.pockers.find(poker => poker.name === name );
  }
}

module.exports = new Poker(); //in memory singleton class