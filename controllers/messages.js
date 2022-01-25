const Message = require('../models/message');
const User = require('../models/user');
const express = require('express');
const messageRouter = express.Router();

messageRouter.post('/', async(req, res) => {
    
    try {
      const { name, message, userId } = req.body;
      const newMessage = await Message.create({
        name,
        message,
      });
      console.log('req body post: ',req.body)

      const foundUser = await User.findById(userId)
      console.log('found user: ',foundUser)

      const userMessages = foundUser.messages;
      const updatedMessage = await User.findByIdAndUpdate(userId, {messages: [...userMessages, newMessage._id]})

      res
        .status(200)
        .json(updatedMessage);
    } catch (error) {
      res
        .status(400)
        .json(error);
    }
})

messageRouter.get('/', async(req, res) => {
    try{
        const foundMessage = await Message.find({});
        res
            .status(200)
            .json(foundMessage)
    }catch(error){
        res
            .status(400)
            .json(error)
    }
})

messageRouter.get('/:id', async (req, res) => {
    try {
        const foundMessage = await Message.findById(req.params.id);
        res
            .status(200)
            .json(foundMessage)
    }catch(error) {
        res
            .status(400)
            .json(error)
    }
})

messageRouter.delete('/:id', async (req, res) => {
    try{
        const foundMessage = await Message.findByIdAndDelete(req.params.id);
        res
            .status(200)
            .json(foundMessage)
    }catch(error) {
        res
            .status(400)
            .json(error)
    }
})

messageRouter.put('/:id', async (req, res) => {
    try{
        const foundMessage = await Comment.findByIdAndUpdate(req.params.id, req.body, {new:true} )
        res
            .status(200)
            .json(foundMessage)

    }catch(error) {
        res
            .status(400)
            .json(error)
    }
})

module.exports = messageRouter;