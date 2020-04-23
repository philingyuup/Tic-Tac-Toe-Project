'use strict'
const getFormFields = require("../../../lib/get-form-fields.js")
const userApi = require("./api.js")
const userUi = require("./ui.js")

const signUp = event => {
  event.preventDefault()
  const form = event.target
  const formFields = getFormFields(form)
  userApi.signUp(formFields)
    .then(userUi.signUpSuccess)
    .catch(userUi.signUpFailure)
  $('form').trigger('reset')
}

const signIn = event => {
  event.preventDefault()
  const form = event.target
  const formFields = getFormFields(form)
  userApi.signIn(formFields)
    .then(userUi.signInSuccess)
    .catch(userUi.signInFailure)
  $('form').trigger('reset')
}

const signOut = () => {
  event.preventDefault()
  userApi.signOut()
    .then(userUi.signOutSuccess)
    .catch(userUi.signOutFailure)
}

const changePassword = event => {
  event.preventDefault()
  const form = event.target
  const formFields = getFormFields(form)
  userApi.changePassword(formFields)
    .then(userUi.changePasswordSuccess)
    .catch(userUi.changePasswordFailure)
  $('form').trigger('reset')
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword
}
