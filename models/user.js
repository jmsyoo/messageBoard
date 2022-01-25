const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: String,
    messages: [{type:Schema.Types.ObjectId, ref: 'Message'}]
},{
    timestamps: true
})

const User = model('User', userSchema);

module.exports = User;