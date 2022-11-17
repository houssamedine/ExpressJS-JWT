import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    adress: {
        street: String,
        suite: String,
        city: String,
        zipcode: Number
    },
    geo: {
        lat: Number,
        lng: Number
    },
    phone: Number,
    website: String,
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    },
    salt: {
        type: String,
    }
});

export const User = mongoose.model('User', userSchema, "Users");



// export class User {
//     constructor(id, name, username, email, adress, geo, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.adress = adress;
//         this.adress.geo = geo;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }