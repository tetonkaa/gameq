const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        rating: {type: Number, required: true},
        title: {type: String, required: true},
        content: {type: String},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)
const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment