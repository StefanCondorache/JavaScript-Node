const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please provide name'],
        minlength : 3,
        maxlength : 50
    },
    email : {
        type : String,
        required : [true, 'Please provide email'],
        match : [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
            'Please provide email'
        ],
        unique : true
    },
    password : {
        type : String,
        required : [true, 'Please provide password'],
        minlength : 6,
        // maxlength : 12 // There is going to be a bug, because hashed password has more than 12 characters
    },
})

UserSchema.pre('save', async function(next) {
    
    const salt = await bcrypt.genSalt(10); // random characters, the argument (10) is the nr of bites (the bigger the more secure and more proccesing required)
    this.password = await bcrypt.hash(this.password, salt);
    next()

})

module.exports = mongoose.model('User', UserSchema);