'use strict'

const storage = require('../store.js')
const url = require('../config.js')

const createGame = () => {
  return $.ajax({
    url: url.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + storage.store.user.token
    },
    data: {}
  })
}

const updateGame = (index, move, overStatus) => {
  return $.ajax({
    url: url.apiUrl + '/games/' + storage.game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + storage.store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': move
        },
        'over': overStatus
      }
    }
  })
}

const indexGame = id => {
  return $.ajax({
    url: url.apiUrl + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + storage.store.user.token
    }
  })
}

const gameLog = data => {
  console.log(data.gameStatus)
  return $.ajax({
    url: url.apiUrl + '/games/' + data.id + '?over=' + data.gameStatus,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + storage.store.user.token
    }
  })
}

module.exports = {
  createGame: createGame,
  updateGame: updateGame,
  gameLog: gameLog,
  indexGame: indexGame
}

// {id: "12312312", gameStatus: trueee}
