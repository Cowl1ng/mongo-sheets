const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const app = express()

// Init middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello'))

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `))