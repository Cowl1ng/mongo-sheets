const express = require('express')
const router = express.Router()

const { getGames, getStats } = require('../controllers/api')

router
  .route('/')
    .get(getGames)

router
  .route('/:id')
    .get(getStats)



// Export router for use in server.js
module.exports = router