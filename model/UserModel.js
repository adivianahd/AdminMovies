const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        user: {
            type: String
        },
        password: {
            type: String
        },
        isAdmin: {
            type: Boolean,
            defautl: false
        }
    }
);

module.exports = mongoose.model("user", UserSchema);