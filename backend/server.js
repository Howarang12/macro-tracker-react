const express = require('express')
const connectDB = require('./config/connect-db')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('dotenv').config()
const passportSetup = require('./config/passport-setup')
const passport = require('passport')
const cors = require("cors")
const authRoute = require('./routes/auth-route')

const app = express()
connectDB()

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

// cors
app.use(cors({
  origin:'http://localhost:3000',
  method:'get, post, put, delete',
  credentials: true
}))

// routes
app.use('/auth', authRoute)

app.listen(5000, () => console.log('Server running'))