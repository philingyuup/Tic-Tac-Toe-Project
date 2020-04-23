const storage = require('../store.js')

let move = 'X'

let checkMove = num => {
  return $(`.board-box[data-cell-index="${num}"]`).html()
}

let winningPermutations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
]

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
  const index = +block.dataset.cellIndex
  if ($(block).text() === "" || null) {
    $(block).text(move)
    if (checkWinner(index, move)) {
      // console.log("end game")
    } else {
    move === 'X' ? move = 'O' : move = 'X'
    $(block).css("cursor", "not-allowed")
    }
  }
}

const checkWinner = (index, move) => {
  for (let i = 0; i < winningPermutations.length; i++) {
    const currentPerm = winningPermutations[i]
    if (currentPerm.includes(index)) {
      if (currentPerm.every(piece => checkMove(piece) == move)) {
        return true
      }
    }
  }
}

module.exports = {
  playMove: playMove,
  emptyBoard: emptyBoard
}
