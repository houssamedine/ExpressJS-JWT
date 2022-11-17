import mongoose from 'mongoose';
const { Schema } = mongoose;

const photoSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    },
    thumbnailUrl: {
        required: true,
        type: String
    },
    albumId: {
        required: true,
        type: mongoose.ObjectId,
        ref: 'Album'
    }
});

export const Photo = mongoose.model('Photo', photoSchema, "Photos");
