// dependencies
const mongoose = require("mongoose")
require("dotenv").config()
const connectionString = process.env.MONGODBURI
mongoose.set('strictQuery', false)
// connetc to MongoDB via mongoose
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// console.log() connection status
mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

//access models
module.exports.User = require('./user')