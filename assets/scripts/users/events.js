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
}

module.exports = {
  signUp: signUp,
}
