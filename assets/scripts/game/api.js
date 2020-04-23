'use strict'
const storage = require('../store.js')
const url = require('../config.js')

const createGame = () => {
  return $.ajax({
    url: url.apiUrl + '/games',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + storage.store.user.token
    },
    data: {}
  })
}

const updateGame = (index, move, overStatus) => {
  return $.ajax({
    url: url.apiUrl + '/games/' + storage.game.game.id,
    method: "PATCH",
    headers: {
      Authorization: "Token token=" + storage.store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": move
        },
        "over": overStatus
      }
    }
  })
}

module.exports = {
  createGame: createGame,
  updateGame: updateGame
}


// {
//   "game": {
//     "cell": {
//       "index": 0,
//       "value": "x"
//     },
//     "over": false
//   }
// }
