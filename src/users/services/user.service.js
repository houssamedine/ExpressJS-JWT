import { User } from '../models/users.js'

import bcrypt from 'bcrypt';

export class UserService {

    constructor() {
        this.saltRounds = 10;
    }

    Add = async (user) => {
        if (user) {
            const repository = new User({
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
                adress: user.adress,
                geo: user.geo,
                phone: user.phone,
                website: user.website,
                company: user.company
            })
            const salt = await bcrypt.genSalt(this.saltRounds);
            const cryptedPassword = await bcrypt.hash(user.password, salt);
            repository.password = cryptedPassword;
            repository.salt = salt;
            const repositoryUser = await repository.save();
            if (repositoryUser) return repositoryUser["_doc"];
        }
        return new user();
    }

    update = async (id, item) => {
        if (item.password) {
            const user = await this.getOne(id);
            if (user) {
                item.password = await bcrypt.hash(item.password, user.salt);
            } else {
                return null;
            }
        }
        const result = await User.findByIdAndUpdate({ _id: id }, item);
        if (result) return this.getOne(id);
        return null;
    }

    delete = (id) => User.deleteOne({ _id: id });

    getOne = async (id) => {
        const result = await User.findOne({ _id: id });
        if (result) return result["_doc"];
    }

    getAll = (page = 1, limit = 10, filter) => {
        if (page <= 0) page = 1;
        if (limit <= 0) limit = 10;
        const flt = {};
        if (filter) {
            if (typeof filter == "string") {
                const filters = `${filter}`.split("__");
                flt[filters[0]] = filters[1];
            } else {
                [...filter].forEach((item) => {
                    const filters = `${item}`.split("__");
                    flt[filters[0]] = filters[1];
                });
            }
        }
        console.log({ limit, page, flt });
        return User.find(
            flt,
            { password: 0, salt: 0 },
            { limit, skip: (page - 1) * limit }
        );
    };

    findByParams(params, value) {
        return User.findOne({ [params]: value });
    }

}