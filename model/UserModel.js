const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        user: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        isAdmin: {
            type: Boolean,
            defautl: false
        },
    }
);

module.exports = mongoose.model("user", UserSchema);