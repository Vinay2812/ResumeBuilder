const express = require('express')
const user = require('../models/userModel')

const app = express.Router()

app.post('/login', async(req, res) =>{
    try{
        const result = await user.findOne({username:req.body.username, password:req.body.password});
        if(result){
            res.send(result);
        }
        else{
            res.status(400).json(error);
        }
    }
    catch(error){
        res.status(400).json(error)
    }
});

app.post('/register', async(req, res) =>{
    try{
        const newuser = new user(req.body);
        await newuser.save();
        res.send(newuser);
    }
    catch(error){
        res.status(400).json(error);
    }
});

app.post('/update', async (req, res) => {
    try {
        await user.findOneAndUpdate({_id : req.body._id}, req.body);
        const new_user = await user.findOne({ _id: req.body._id });

        res.send(new_user);
    }
    catch (error) {
        res.status(400).json(error);
    }
});


module.exports = app