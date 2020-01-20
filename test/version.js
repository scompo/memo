'use strict'

const t = require('tap')

const ver = require('../api/_utils/version')

t.test('version', t => {
  return ver()
    .then(r => t.equal(typeof r, 'string'))
})
