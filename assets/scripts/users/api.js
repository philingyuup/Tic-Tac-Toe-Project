'use strict'

const api = require("../config.js")

const signUp = data => {
  return $.ajax({
    url: api.apiUrl + "/sign-up",
    method: 'POST',
    data: data
  })
}

module.exports = {
  signUp: signUp,
}
