const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')
const Comment = require('../models/comment')

function isAuthenticated(req, res, next) {
    if (req.headers.authorization) {
        next()
    } else {
        res.sendStatus(401)
    }
}

router.post('/', isAuthenticated, async (req, res) => {
    const createdComment = await Comment.create(req.body)
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    createdComment.user = decoded.id
    createdComment.save()
    res.json(createdComment)
})

// index route
router.get('/', async (req, res) => {
    const token = req.headers.authorization
    const decode = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decode.id)
    const allComments = await Comment.find({ user: foundUser })
    res.json(allComments)
})

module.exports = router