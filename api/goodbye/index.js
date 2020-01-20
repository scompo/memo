module.exports = async (req, res) => {
  const name = req.query.name || 'world'
  res.end(`Goodbye, ${name}!`)
}
