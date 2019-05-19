class ValidationService {

  static pokerName(pokerName) {
    let error = null
    if (!pokerName) {
      error = 'Poker name required.'
      return error;
    }
    if (pokerName.length > 200) {
      error = "Can't be more than 200 characters"
      return error
    }
    return error
  }

  static voters(voterCount) {
    let error = null
    if (!voterCount) {
      error = 'Voter count required.'
      return error
    }
    if (isNaN(voterCount)) {
      error = "You cant enter letters"
      return error
    }
    if (voterCount <= 0) {
      error = "Should more than 0"
      return error
    }
    return error
  }

  static storyList(storyList) {
    let error = null
    if (!storyList) {
      error = 'Story list required.'
      return error
    }
    if((new Set(storyList)).size !== storyList.length){
      error = 'Stories must be different'
      return error
    }
    return error
  }
}

export default ValidationService