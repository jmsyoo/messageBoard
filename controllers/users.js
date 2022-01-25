const User = require('../models/user');
const express = require('express');
const userRouter = express.Router();

userRouter.post('/', async(req, res) => {
    try{
        const newUserPost = await User.create(req.body);
        res
            .status(200)
            .json(newUserPost)
    }catch(error){
        res
            .status(400)
            .json(error)
    }
})

userRouter.get('/', async(req, res) => {
    try{
        const foundUser = await User.find({});
        res
            .status(200)
            .json(foundUser)
    }catch(error){
        res
            .status(400)
            .json(error)
    }
})

userRouter.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        await foundUser.execPopulate('messages')
        res
            .status(200)
            .json(foundUser)
    }catch(error) {
        res
            .status(400)
            .json(error)
    }
})

module.exports = userRouter;