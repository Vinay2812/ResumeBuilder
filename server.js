const express = require('express')
const app = express();
const dotenv = require("dotenv")
const cors = require("cors");
dotenv.config();
app.use(express.json())
app.use(cors({
    origin: '*'
}));
require('./dbConnect')

// const port = 5000 for local
const port = process.env.PORT || 5000;

const userRoute = require('./routes/userRoute')


app.use('/api/user/', userRoute)

app.listen(port, () => console.log(`Listening ${port}`))

// for production level
const path = require('path')
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

