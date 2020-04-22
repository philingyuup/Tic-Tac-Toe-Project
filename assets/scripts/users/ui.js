'use strict'

const storage = require('../store.js')

const signUpSuccess = data => {
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#user-message').text('Sign Up Success!')
}

const signUpFailure = error => {
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
  $('#user-message').text('Sign Up Failed!')
  console.log(error)
}

const signInSuccess = data => {
  storage.store = data
  console.log(storage.store)
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#user-message').text('Sign In Success!')
}

const signInFailure = error => {
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
  $('#user-message').text('Sign In Failed!')
  console.log(error)
}

const signOutSuccess = () => {
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#user-message').text('Sign Out success!')
}

const signOutFailure = () => {
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
  $('#user-message').text('Sign Out Failed!')
}

const changePasswordSuccess = data => {
  console.log(storage.store)
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#user-message').text('Change password Success!')
}

const changePasswordFailure = error => {
  $('#user-message').removeClass()
  $('#user-message').addClass('failure')
  $('#user-message').text('Change password Failed!')
  console.log(error)
}

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure
}
