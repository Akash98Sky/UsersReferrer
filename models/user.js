const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    referredUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    isPaymentMade: {
        type: Boolean,
        default: false
    },
    totalEarnings: {
        type: Number,
        default: 0
    },
});

const User = mongoose.model('users', userSchema);

module.exports = User;