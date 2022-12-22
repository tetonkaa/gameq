const express = require('express')
const router = express.Router()
const db = require("../models")
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const User = require('../models/user')
//routes

router.post('/signup', async (req, res) => {
  const foundUser = await db.User.findOne({ username: req.body.username})
  console.log(foundUser)
  if(!foundUser){
      const createdUser = await db.User.create(req.body)
      const payload = {id: createdUser._id}
      const token = jwt.encode(payload, config.jwtSecret)
      res.json({
          user: createdUser,
          token: token
      })
  } else {
      res.sendStatus(401)
  }
})

router.post('/login', async (req, res) => {
    const foundUser = await User.findOne({ username: req.body.username })
    if (foundUser && foundUser.password === req.body.password) {
        const payload = {id: foundUser.id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            token: token,
            user: foundUser
        })
    } else {
      res.sendStatus(401)
    }
})

//show user profile
router.get('/profile/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
})

router.get('/', async (req, res) => {
  const token = req.headers.authorization
  const decode = jwt.decode(token, config.jwtSecret)
  const foundUser = await db.User.findById(decode.id)
  res.json(foundUser)
})
//make a route that can be accessed on the profile page to display unique user info
//

//get the user id


module.exports = router