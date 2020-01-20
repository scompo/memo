'use strict'

const greet = require('../_utils/greeter')

module.exports = async (req, res) => {
  const name = req.query.name || 'world'
  greet('Goodbye', name)
    .then(r => {
      res.end(r)
    })
}
