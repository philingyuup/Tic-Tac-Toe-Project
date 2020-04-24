'use strict'
const storage = require('../store.js')

const createGameSuccess = gameData => {
  storage.game = gameData
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
  $('#user-message').text('Create Game Success!')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
}

const createGameFailure = error => {
  $('#user-message').text('Create Game Failed! Please Log-In!')
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
}

const updateGameSuccess = gameData => {
  storage.game = gameData
  $('#user-message').text('Update Game Success!')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
}

const updateGameFailure = error => {
  $('#user-message').text('Update Game Failed')
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
}

const indexGameSuccess = data => {
  storage.gameLog = data
  $('#user-message').text('Index Game Success!')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
}

const indexGameFailure = error => {
  console.log(error)
  $('#user-message').text('Index Game Failed!')
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
}

const gameLogSuccess = data => {
  storage.gameLog = data
  $('#user-message').text('Game Log Success!')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
}

const gameLogFailure = error => {
  console.log(error)
  $('#user-message').text('Game Log Failed!')
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
}

module.exports = {
  createGameSuccess: createGameSuccess,
  createGameFailure: createGameFailure,
  updateGameSuccess: updateGameSuccess,
  updateGameFailure: updateGameFailure,
  indexGameSuccess: indexGameSuccess,
  indexGameFailure: indexGameFailure,
  gameLogSuccess: gameLogSuccess,
  gameLogFailure: gameLogFailure
}
