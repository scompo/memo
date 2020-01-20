'use strict'

const version = require('../_utils/version')

module.exports = async (req, res) => {
  version()
    .then(v => {
      res.end(v)
    })
}
