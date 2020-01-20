'use strict'

const greet = require('../_utils/greeter')

module.exports = async (req, res) => {
  const name = req.query.name || 'world'
  return greet('Hello', name)
    .then(r => {
      res.end(r)
    })
}
