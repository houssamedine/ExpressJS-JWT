import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    },
    userId: {
        required: true,
        type: mongoose.ObjectId,
        ref: 'User'
    },
});

export const Post = mongoose.model('Post', postSchema, "Posts");
