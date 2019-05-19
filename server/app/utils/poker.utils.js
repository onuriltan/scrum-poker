exports.createPokerURL = function (pokerName) {
  return `${process.env.HOST_URL}/poker/${pokerName}`
}
