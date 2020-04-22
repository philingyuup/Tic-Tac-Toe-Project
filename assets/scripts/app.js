'use strict'
const userEvents = require("./users/events.js")

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on("submit", userEvents.signUp),
  $('#sign-in').on("submit", userEvents.signIn),
  $('#sign-out').on('click', userEvents.signOut)
  $('#changepw').on('submit', userEvents.changePassword)
})
