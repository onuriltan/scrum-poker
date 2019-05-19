class VoteEntity {
  constructor(story, poker, voter, point) {
    this.story = story;
    this.poker = poker;
    this.voter = voter;
    this.point = point;
  }
}

module.exports = VoteEntity;