const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    { 
        message: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true      
        },
        likers: {
            type: [String]
        }
    },
    { timestamps: true } 
);

module.exports = mongoose.model("Post", postSchema);
