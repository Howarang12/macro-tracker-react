const express = require('express')
const connectDB = require('./config/connect-db')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config()
const passportSetup = require('./config/passport-setup')
const passport = require('passport')
const cors = require("cors")
const authRoute = require('./routes/auth-route')

const app = express()
const PORT = process.env.PORT || 5000
connectDB()

// morgan
app.use(morgan('tiny'))

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// cors
app.use(cors({
  origin:'http://localhost:3000', // <---- origin of react app
  method:'get, post, put, delete',
  credentials: true
}))

// Express session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}))

//initialize passport
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/auth', authRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))