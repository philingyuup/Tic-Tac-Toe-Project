const storage = require('../store.js')

let move = 'X'

const emptyBoard = () => {
  $('#gameboard').empty()
  $('#gameboard').append(`
  <div class="col-3 board-box"></div>
  <div class="col-3 board-box"></div>
  <div class="col-3 board-box"></div>
  <div class="w-100"></div>
  <div class="col-3 board-box"></div>
  <div class="col-3 board-box"></div>
  <div class="col-3 board-box"></div>
  <div class="w-100"></div>
  <div class="col-3 board-box"></div>
  <div class="col-3 board-box"></div>
  <div class="col-3 board-box"></div>
  <div class="w-100"></div>`)
  $('.board-box').css("cursor","pointer")
}

const playMove = event => {
  const block = event.target
  if ($(block).text() === "" || null) {
    $(block).text(move)
    move === 'X' ? move = 'O' : move = 'X'
    $(block).css("cursor", "not-allowed")
  }
}


module.exports = {
  playMove: playMove,
  emptyBoard: emptyBoard
}
