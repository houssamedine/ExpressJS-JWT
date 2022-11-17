import { PostService } from "../services/post.service.js";

export class PostController {

    constructor() {
        this.postService = new PostService();
    }

    Add = (post) => this.postService.Add(post);

    update = (id, item) => this.postService.update(id, item);

    getOne = (id) => this.postService.getOne(id);

    delete = (id) => this.postService.delete(id);

    getAll = () => this.postService.getAll();

}