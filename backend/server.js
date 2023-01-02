//dependencies
const express = require('express')
const app = express()
const cors = require("cors")
require("dotenv").config()
const passport = require('./config/passport')()
const path = require("path")
//models
const db = require('./models')
//controllers
const userCtrl = require('./controllers/users')
const commentCtrl = require('./controllers/comments')

//middleware
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(passport.initialize())
//use controllers
app.use('/user', userCtrl);
app.use('/comment', commentCtrl);

app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "frontend", "build", "index.html"));
});
//listener
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})