const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

        id: {type: Number},
        name: {type: String, require: true},
        nickname: {type: String},
        points: {type: Number},
        ranking: {type: Number},
        isActive: {type: Boolean},
        email: {type: String},
        phoneNumber: {type: Number}
    }); 

    module.exports = mongoose.model('user', userSchema);