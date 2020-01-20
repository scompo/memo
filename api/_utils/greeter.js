module.exports = async function (name, what) {
  const first = what || 'Hi'
  const second = name || ''
  return first + (second ? (', ' + second) : '') + '!'
}
