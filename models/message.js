const {Schema, model} = require('mongoose');

const messageSchema = new Schema({
    name: String,
    message: String

},{
    timestamps: true
})

const Message = model('Message', messageSchema);

module.exports = Message;