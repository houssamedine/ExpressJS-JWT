import { Comment } from "../models/comments.js"

export class CommentService {

    Add = (comment) => {
        const repository = new Comment({
            name: comment.name,
            email: comment.email,
            body: comment.body,
            postId: comment.postId,
        })
        return repository.save();
    }

    update = async (id, item) => {
        const result = await Comment.findByIdAndUpdate({ _id: id }, item);
        if (result) return this.getOne(id);
        return null;
    };

    getOne = (id) => Comment.findOne({ _id: id });

    delete = (id) => Comment.remove({ _id: id });

    getAll = () => Comment.find().populate('postId');
}