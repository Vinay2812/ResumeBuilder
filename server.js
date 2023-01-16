const express = require('express')
const app = express();
const dotenv = require("dotenv")
const cors = require("cors");
dotenv.config();
app.use(cors({
    origin: "*"
}))

const dbConnect = require('./dbConnect')
app.use(express.json())

// const port = 5000 for local
const port = process.env.PORT || 5000;

const userRoute = require('./routes/userRoute')

const path = require('path')

app.use('/api/user/', userRoute)

// for production level
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Listening ${port}`))