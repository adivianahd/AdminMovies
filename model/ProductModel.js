const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String
        },
        category: {
            type: String
        },
        image: {
            type: String
        },
        type: {
            type: String,
            enum: ["isAdmin" ,  "user"] , 
            default: "user"
        }
    }
);

module.exports = mongoose.model("product", ProductSchema);