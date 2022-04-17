const mongoose = require('mongoose')

const URL = 'mongodb+srv://vinay:brockvs28@cluster0.oldoz.mongodb.net/resume'

mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected', () =>{
    console.log("Mongo db connected");
})

connection.on('error', (error)=>{
    console.log(error)
})

