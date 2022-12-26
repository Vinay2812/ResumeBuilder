const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB, {useUnifiedTopology:true, useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected', () =>{
    console.log("Mongo db connected");
})

connection.on('error', (error)=>{
    console.log(error)
})

