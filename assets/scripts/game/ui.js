'use strict'
const storage = require('../store.js')

const winCheck = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
]

const logTable = `
<table class="table">
  <thead>
    <tr>
      <th scope='col'>User ID</th>
      <th scope='col'>Games Played</th>
      <th scope='col'>Games Finished</th>
      <th scope='col'>Games Won</th>
    </tr>
  </thead>
  <tbody id='totalStats'>
  </tbody>
</table>
<table class="table">
  <thead>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>ID</th>
      <th scope='col'>Game Info</th>
      <th scope='col'>Finished Game</th>
      <th scope='col'>Who Won?</th>
    </tr>
  </thead>
  <tbody id='tableContent'>
  </tbody>
</table>
`

const showTotalStats = () => {
  const id = storage.store.user.id
  let gamesPlayed = 0
  let gamesFinished = 0
  let gamesWon = 0
  if (storage.log.games === undefined || null) {
    gamesPlayed = 1
    if (storage.log.game.over === true) {
    gamesFinished = 1
    }
    if (storage.log.game.winner === 'X') {
    gamesWon = 1
    }
  } else {
    gamesPlayed = storage.log.games.length
    for (let i = 0; i < storage.log.games.length; i++) {
      if (storage.log.games[i].over === true) {
        gamesFinished++
      }
      if (storage.log.games[i].winner === 'X') {
        gamesWon++
      }
    }
  }
  let stats = `
    <tr>
      <th scope='row'>${id}</th>
        <td>${gamesPlayed}</td>
        <td>${gamesFinished}</td>
        <td>${gamesWon}</td>
    </tr>
  `
  return stats
}

const logWinner = () => {
  if (storage.log.games === undefined || null) {
    storage.log.game.winner = checkWinner(storage.log.game)
  } else {
    for (let i = 0; i < storage.log.games.length; i++) {
      storage.log.games[i].winner = checkWinner(storage.log.games[i])
    }
  }
}

const checkWinner = data => {
  const cell = data.cells
  if (data.over === true) {
    for (let i = 0; i < winCheck.length; i++) {
      let temp = []
      temp.push(cell[winCheck[i][0]])
      temp.push(cell[winCheck[i][1]])
      temp.push(cell[winCheck[i][2]])
      if (temp.every(piece => piece === 'X')) {
        return 'X'
      }
      if (temp.every(piece => piece === 'O')) {
      return 'O'
      }
    }
  } if (data.over === true && !cell.some(piece => piece == '')) {
    return 'Draw'
  } else {
    return 'None'
  }
}

const displayStats = () => {
  let stats
  if (storage.log.games === undefined || null) {
    stats = `
    <tr>
      <th scope='row'>1</th>
        <td>${storage.log.game.id}</td>
        <td>${storage.log.game.cells}</td>
        <td>${storage.log.game.over}</td>
        <td>${storage.log.game.winner}</td>
    </tr>
  `} else {
    for (let i = 0; i < storage.log.games.length; i++) {
      stats += `
      <tr>
        <th scope='row'>${i}</th>
          <td>${storage.log.games[i].id}</td>
          <td>${storage.log.games[i].cells}</td>
          <td>${storage.log.games[i].over}</td>
          <td>${storage.log.games[i].winner}</td>
      </tr>`
    }
  }
  return stats
}

const createGameSuccess = gameData => {
  storage.game = gameData
  $('#gameboard').empty()
  $('#gameboard').append(`
  <div data-cell-index='0' class="col-4 board-box"></div>
  <div data-cell-index='1' class="col-4 board-box"></div>
  <div data-cell-index='2' class="col-4 board-box"></div>
  <div data-cell-index='3' class="col-4 board-box"></div>
  <div data-cell-index='4' class="col-4 board-box"></div>
  <div data-cell-index='5' class="col-4 board-box"></div>
  <div data-cell-index='6' class="col-4 board-box"></div>
  <div data-cell-index='7' class="col-4 board-box"></div>
  <div data-cell-index='8' class="col-4 board-box"></div>
  `)
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
  if (storage.game.game.over === false) {
    $('#user-message').text('Update Game Success!')
    $('#user-message').removeClass()
    $('#user-message').addClass('success')
  }
}

const updateGameFailure = error => {
  $('#user-message').text('Update Game Failed')
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
}

const indexGameSuccess = data => {
  storage.log = data
  logWinner()
  $('#user-message').text('Index Game Success!')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#gameLogStats').empty()
  $('#gameLogStats').append(logTable)
  $('#tableContent').append(displayStats())
  $('#totalStats').append(showTotalStats())
}

const indexGameFailure = error => {
  console.log(error)
  $('#user-message').text('Index Game Failed!')
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
}

const gameLogSuccess = data => {
  storage.log = data
  logWinner()
  $('#user-message').text('Game Log Success!')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#gameLogStats').empty()
  $('#gameLogStats').append(logTable)
  $('#tableContent').append(displayStats())
  $('#totalStats').append(showTotalStats())
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
