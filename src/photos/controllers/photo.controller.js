import { PhotoService } from "../services/photo.service.js";

export class PhotoController {

    constructor() {
        this.photoService = new PhotoService();
    }

    Add = (photo) => this.photoService.Add(photo);

    update = (id, item) => this.photoService.update(id, item);

    getOne = (id) => this.photoService.getOne(id);

    delete = (id) => this.photoService.delete(id);

    getAll = () => this.photoService.getAll();

}