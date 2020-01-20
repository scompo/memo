module.exports = async (req, res) => {
  const name = req.query.name || 'world'
  res.end(`Hello, ${name}!`)
}
