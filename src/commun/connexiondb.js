import mongoose from 'mongoose';

export class ConnexionDB {

    constructor() {
        this.dbconnexion = null;
    }

    generateConnexion = async () => {
        try {
            this.dbconnexion = await mongoose.connect('mongodb://localhost:27017/express');
        } catch (err) {
            console.error(err);
            this.dbconnexion = null;
        }
    }

    getConnecion = async () => {
        if (!this.dbconnexion)
            await this.generateConnexion();
        return this.dbconnexion;
    }

}