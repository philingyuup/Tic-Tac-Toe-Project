'use strict'

const api = require("../config.js")
const storage = require('../store.js')

const signUp = data => {
  return $.ajax({
    url: api.apiUrl + "/sign-up",
    method: 'POST',
    data: data
  })
}

const signIn = data => {
  return $.ajax({
    url: api.apiUrl + "/sign-in",
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: api.apiUrl + "/sign-out",
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + storage.store.user.token
    }
  })
}

const changePassword = data => {
  return $.ajax({
    url: api.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + storage.store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword
}
