const express = require('express')
const app = express()

const dbConnect = require('./dbConnect')
app.use(express.json())

// const port = 5000 for local
const port = process.env.PORT || 5000;

const userRoute = require('./routes/userRoute')

const path = require('path')

app.use('/api/user/', userRoute)

// for production level
if(process.env.NODE_ENV === 'production'){

    app.use('/' , express.static(path.resolve(__dirname, "client", "build")))
    app.get('*', (req , res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.get('/', (req, res) => res.send('hello'))
app.listen(port, () => console.log(`Listening ${port}`))