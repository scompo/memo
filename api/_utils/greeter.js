'use strict'

module.exports = async function (what, name) {
  const first = what || 'Hi'
  const second = name || ''
  return first + (second ? (', ' + second) : '') + '!'
}
