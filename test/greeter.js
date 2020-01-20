'use strict'

const t = require('tap')

const greet = require('../api/_utils/greeter')

t.test('greet two params', t => {
  return greet('me', 'Hello')
    .then(r => t.equal(r, 'Hello, me!'))
})

t.test('greet one param', t => {
  return greet('me')
    .then(r => t.equal(r, 'Hi, me!'))
})

t.test('greet no params', t => {
  return greet()
    .then(r => t.equal(r, 'Hi!'))
})
