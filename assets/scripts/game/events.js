'use strict'

const storage = require('../store.js')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')

let move = 'X'
let gameOver = false

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

const createBoard = () => {
  move = 'X'
  gameOver = false
  gameApi.createGame()
    .then(gameUi.createGameSuccess)
    .catch(gameUi.createGameFailure)
}

const playMove = event => {
  const block = event.target
  const index = +block.dataset.cellIndex
  if ($(block).text() === "" && $(block).css("cursor") !== "not-allowed") {
    $(block).text(move)
    if (checkWinner(index, move)) {
      $('.board-box').css("cursor", "not-allowed")
      gameOver = true
    }
    gameApi.updateGame(index, move, gameOver)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameFailure)
    if (!gameOver) {
    move === 'X' ? move = 'O' : move = 'X'
    $(block).css("cursor", "not-allowed")
    }
  }

}

const checkWinner = (index, userMove) => {
  for (let i = 0; i < winningPermutations.length; i++) {
    const currentPerm = winningPermutations[i]
    if (currentPerm.includes(index)) {
      if (currentPerm.every(piece => checkMove(piece) == userMove)) {
        return true
      }
    }
  }
}

module.exports = {
  playMove: playMove,
  createBoard: createBoard
}
