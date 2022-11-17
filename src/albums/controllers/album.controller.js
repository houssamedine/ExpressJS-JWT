import { AlbumService } from '../services/album.service.js';

export class AlbumController{

    constructor() {
        this.albumService = new AlbumService();
    }

    Add = (album) => this.albumService.Add(album);

    update = (id, item) => this.albumService.update(id, item);

    delete = (id) => this.albumService.delete(id);

    getOne = (id) => this.albumService.getOne(id);

    getAll = () => this.albumService.getAll()
        ;
}