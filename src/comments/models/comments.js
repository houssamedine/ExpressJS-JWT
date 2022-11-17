import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    postId: {
        required: true,
        type: mongoose.ObjectId,
        ref: 'Post'
    }
});

export const Comment = mongoose.model('Comment', commentSchema, "Comments");
