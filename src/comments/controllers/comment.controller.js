import { CommentService } from "../services/comment.service.js";

export class CommentController {

    constructor() {
        this.commentService = new CommentService();
    }

    Add = (comment) => this.commentService.Add(comment);

    update = (id, item) => this.commentService.update(id, item);

    getOne = (id) => this.commentService.getOne(id);

    delete = (id) => this.commentService.delete(id);

    getAll = () => this.commentService.getAll();

}