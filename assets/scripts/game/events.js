const storage = require('../store.js')

let move = 'X'

const playMove = event => {
  const block = event.target
  if ($(block).text() === "" || null) {
    $(block).text(move)
    move === 'X' ? move = 'O' : move = 'X'
  } else {
    $(block).css("cursor", "not-allowed")
  }
}


module.exports = {
  playMove: playMove,

}
