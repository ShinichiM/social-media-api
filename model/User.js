const { Schema, model, Type } = require('mongoose');
const { validateEmail } = require('../utils/utility');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required',
        trim: true
    },
    email: {
        type: String,
        required: 'Email Address is required',
        unique: true,
        validate: [validateEmail, 'Please enter a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/, 'Please fill a valid email address'] 
    },
    thoughts: [{ _id: Schema.Types.ObjectId, ref: 'Thoughts'}],
    friends: [{ _id: Schema.Types.ObjectId, ref: 'User'}]
}, {
    toJSON: {
        getters: true,
        virtuals: true
    },
    id: false
});

userSchema.virtual('friendCount', function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;