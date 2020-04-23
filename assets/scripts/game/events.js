const storage = require('../store.js')

let move = 'X'

const emptyBoard = () => {
  $('#gameboard').empty()
  $('#gameboard').append(`
  <div data-cell-index='0' class="col-3 board-box"></div>
  <div data-cell-index='1' class="col-3 board-box"></div>
  <div data-cell-index='2' class="col-3 board-box"></div>
  <div class="w-100"></div>
  <div data-cell-index='3' class="col-3 board-box"></div>
  <div data-cell-index='4' class="col-3 board-box"></div>
  <div data-cell-index='5' class="col-3 board-box"></div>
  <div class="w-100"></div>
  <div data-cell-index='6' class="col-3 board-box"></div>
  <div data-cell-index='7' class="col-3 board-box"></div>
  <div data-cell-index='8' class="col-3 board-box"></div>
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

const checkWinner = () => {
  //starting at 0,3,6
  //if n === n++ === n++

  //starting at 0,1,2
  //if n === n+=3 === n+=3

  //starting at 0
  //if n === n+=4 === n+=4

  //starting at 2
  //if n === n+=2 === n+=2
}

module.exports = {
  playMove: playMove,
  emptyBoard: emptyBoard
}
