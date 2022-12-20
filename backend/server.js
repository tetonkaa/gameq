//dependencies
const express = require('express')
const app = express()
const cors = require("cors")
require("dotenv").config()
const passport = require('./config/passport')()
//models
const db = require('./models')
//controllers
const userCtrl = require('./controllers/users')

//middleware
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(passport.initialize())
//use controllers
app.use('/user', userCtrl)

//listener
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`)
})