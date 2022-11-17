import { Photo } from "../models/photos.js"

export class PhotoService {

    Add = (photo) => {
        const repository = new Photo({
            title: photo.title,
            url: photo.url,
            thumbnailUrl: photo.thumbnailUrl,
            albumId: photo.albumId,
        })
        return repository.save();
    }

    update = async (id, item) => {
        const result = await Photo.findByIdAndUpdate({ _id: id }, item);
        if (result) return this.getOne(id);
        return null;
    };

    getOne = (id) => Photo.findOne({ _id: id });

    delete = (id) => Photo.remove({ _id: id });

    getAll = () => Photo.find().populate('albumId');
}