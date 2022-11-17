import { Post } from "../models/posts.js"

export class PostService {

    Add = (post) => {
        if (post) {
            const repository = new Post({
                title: post.title,
                body: post.body,
                userId: post.userId,
            })

            return  repository.save();
        }
        return new post();
    }

    update = async (id, item) => {
        const result = await Post.findByIdAndUpdate({ _id: id }, item);
        if (result) return this.getOne(id);
        return null;
    };

    getOne = (id) => Post.findOne({ _id: id });

    delete = (id) => Post.remove({ _id: id });

    getAll = () => Post.find().populate('userId');
}