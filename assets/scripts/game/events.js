'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const storage = require('../store.js')

let move = 'X'
let gameOver = false

const checkMove = num => {
  return $(`.board-box[data-cell-index="${num}"]`).html()
}

const winningPermutations = [
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
  if ($(block).text() === '' && $(block).css('cursor') !== 'not-allowed') {
    $(block).text(move)
    if (checkWinner(index, move)) {
      $('.board-box').css('cursor', 'not-allowed')
      if (checkWinner(index, move) == 9) {
        $('#user-message').text(`Game Over. Draw!`)
      } else {
      $('#user-message').text(`Player ${move} won!`)
      }
      gameOver = true
    }
    gameApi.updateGame(index, move, gameOver)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameFailure)
    if (!gameOver) {
      move === 'X' ? move = 'O' : move = 'X'
      $(block).css('cursor', 'not-allowed')
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
  const drawCheck = $('.board-box').toArray()
  const draw = []
  for (let i = 0; i < drawCheck.length; i++) {
    draw.push(drawCheck[i].innerHTML)
  }
  if (!draw.some(piece => piece == '')) {
    return 9
  }
}

const showGame = event => {
  event.preventDefault()
  const gameId = event.target
  const gameIdForm = getFormFields(gameId)
  if (gameIdForm.gameStatus == 'all') {
    gameApi.indexGame(gameIdForm.id)
      .then(gameUi.indexGameSuccess)
      .catch(gameUi.indexGameFailure)
  } else {
    gameApi.gameLog(gameIdForm)
      .then(gameUi.gameLogSuccess)
      .catch(gameUi.gameLogFailure)
  }
  $('form').trigger('reset')
}

module.exports = {
  playMove: playMove,
  createBoard: createBoard,
  showGame: showGame,
}
