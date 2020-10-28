const mongoose = require('mongoose')

const Player = new mongoose.Schema ({
  name: {
    type: String,
    trim: true,
    required: [true, 'Player Name not found']
  },
  playerID: {
    type: Number,
    required: [true, 'Player ID not found']
  }
})


const GameSchema = new mongoose.Schema({
  team1: {
    type: String,
    trim: true,
    required: [true, 'Team 1 not found']
  },
  team2: {
    type: String,
    trim: true,
    required: [true, 'Team 2 not found']
  },
  started: {
    type: Boolean,
    default: false,
  },
  players: [Player]

})

module.exports = mongoose.model('Game', GameSchema)