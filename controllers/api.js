// @desc    Get games
// @route   GET /api   
// @access  Public
exports.getGames = (req, res, next) => {
  res.send('GET games')
}

// @desc    Get stats for 1 game
// @route   GET /api/:id
// @access  Public
exports.getStats = (req, res, next) => {
  res.send(`GET stats for ${req.params.id}`)
}

