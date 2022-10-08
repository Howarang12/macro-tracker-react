const router = require('express').Router()
const passport = require('passport')
const User = require('../models/user-model')

const CLIENT_URL = "http://localhost:3000/"

router.post('/login', (req, res) => {
  console.log(req.body)
})

router.post('/register', (req, res) => {
  User.findOne({email: req.body.email}, async (err, doc) => {
    if(err) throw err
    if(doc) res.send('user already exists')
    if(!doc){
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      await newUser.save()
      res.send('user created')
    }
  })
})



router.get('/users', async (req, res) => {
  let users = await User.find()
  res.json(users)
})

router.get('/login/success', (req, res) => {
  if(req.user) {
    res.status(200).json({
      success: false,
      message: 'successful',
      user: req.user
    })
  }
})

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure'
  })
})

router.get('/logout', (req, res, next) => {
   //handle with passport
   req.logout(err => {
    if (err) { return next(err) }
    res.redirect('/login')
  })
  res.redirect(CLIENT_URL)
})

//auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  prompt: 'select_account'
}))

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', {
  successRedirect: CLIENT_URL,
  failureRedirect: '/login/failed'
}))

module.exports = router