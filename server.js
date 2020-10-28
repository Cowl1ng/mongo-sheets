const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

// Connecting to the mongoDB database
connectDB()

const api = require('./routes/api')


const app = express()

// Init middleware
app.use(express.json({ extended: false }))


app.use('/api', api)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} `))