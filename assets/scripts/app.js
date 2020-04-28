'use strict'
const userEvents = require('./users/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#sign-up').on("submit", userEvents.signUp),
  $('#sign-in').on("submit", userEvents.signIn),
  $('#sign-out').on('click', userEvents.signOut),
  $('#changepw').on('submit', userEvents.changePassword),
  $('#create-board').on('click', gameEvents.createBoard),
  $('#gameboard').delegate(".board-box","click", gameEvents.playMove),
  $('#game-log').on('submit', gameEvents.showGame)
})
