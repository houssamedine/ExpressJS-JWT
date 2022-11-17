import mongoose from 'mongoose';

const { Schema } = mongoose;
const albumSchema = new Schema({
    title: {
        required: true,
        type:String
    },
    userId: {
        required: true,
        type: mongoose.ObjectId,
        ref:'User'
    }
});

export const Album = mongoose.model('Album', albumSchema, 'Albums')
