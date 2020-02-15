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
            
        }
    }
);

module.exports = mongoose.model("product", ProductSchema);