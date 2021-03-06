'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const storage = require('../store.js')

let move = 'X'
let gameOver = false

const checkWin = gameUi.checkWinner

// restarts the gameboard and the rules
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
  // conditional check if a space has been 'played'
  if ($(block).text() === '' && $(block).css('cursor') !== 'not-allowed') {
    $(block).text(move)
    // marks the space as 'played'
    $(block).css('cursor', 'not-allowed')
    const storeGame = storage.game.game
    // store move played on the board
    storeGame.cells[index] = move
    if (checkWin(storeGame) === 'X') {
      storeGame.over = true
      $('.board-box').css('cursor', 'not-allowed')
      $('#user-message').text(`Player X won!`)
    } else if (checkWin(storeGame) === 'O') {
      storeGame.over = true
      $('.board-box').css('cursor', 'not-allowed')
      $('#user-message').text(`Player O won!`)
    } else if (checkWin(storeGame) === 'Draw') {
      storeGame.over = true
      $('#user-message').text(`Game Over. Draw!`)
    }
    gameApi.updateGame(index, move, storeGame.over)
      .then(gameUi.updateGameSuccess)
      .catch(gameUi.updateGameFailure)
      // switches our players on each board move
    move === 'X' ? move = 'O' : move = 'X'
  }
}

const showGame = event => {
  event.preventDefault()
  const gameId = event.target
  const gameIdForm = getFormFields(gameId)
  if (gameIdForm.gameStatus === 'all') {
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
  playMove,
  createBoard,
  showGame
}
