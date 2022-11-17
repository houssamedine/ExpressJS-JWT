import { Album } from '../models/albums.js'

export class AlbumService {

    Add = (album) => {
        const repository = new Album({
            title: album.title,
            userId: album.userId,
        })
        return repository.save();
    }

    update = async (id, item) => {
        const result = await Album.findByIdAndUpdate({ _id: id }, item);
        if (result)
            return this.getOne(id);
        return null;
    }

    getAll = () => Album.find().populate("userId");

    getOne = (id) => Album.findOne({ _id: id });

    delete = (id) => Album.remove({ _id: id });

}