const express = require('express')
const router = express.Router()
const db = require("../models")
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const User = require('../models/user')
//routes

router.post('/signup', (req, res) => {
    if (req.body.username && req.body.password) {
      let newUser = {
        username: req.body.username,
        password: req.body.password
      }
      User.findOne({ username: req.body.username })
        .then((user) => {
          if (!user) {
            User.create(newUser)
              .then(user => {
                if (user) {
                  let payload = {
                    id: newUser.id
                  }
                  let token = jwt.encode(payload, config.jwtSecret)
                  res.json({
                    token: token
                  })
                } else {
                  res.sendStatus(401)
                }
              })
          } else {
            res.sendStatus(401)
          }
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

module.exports = router