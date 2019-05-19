class ValidationService {

  static pokerName(pokerName) {
    let error = null
    if (!pokerName) {
      error = 'Poker name required.';
    }
    if (pokerName.length > 200) {
      error = "Can't be more than 200 characters";
    }
    return error;
  }

  static voters(voterCount) {
    let error = null
    if (!voterCount) {
      error = 'Voter count required.';
    }
    if(isNaN(voterCount)) {
      error = "You cant enter letters"
    }
    if(voterCount <= 0) {
      error = "Should more than 0"
    }
    return error;
  }

  static storyList(storyList) {
    let error = null
    if (!storyList) {
      error = 'Story list required.';
    }
    return error;
  }
}

export default ValidationService