import express from 'express';
import { ConnexionDB } from './src/commun/connexiondb.js';
import { route as userRouter } from "./src/users/index-user.js";
import { route as postRouter } from "./src/posts/index-post.js";
import { route as authRouter } from "./src/auth/index.js";
import { route as albumRouter } from "./src/albums/index-album.js";
import { route as todoRouter } from "./src/todos/index-todos.js";
import { route as commentRouter } from "./src/comments/index-comment.js";
import { route as photoRouter } from "./src/photos/index-photo.js";
import { auth } from "./src/commun/auth.js";

//pour configurer le fichier ".env"
import * as dotenv from 'dotenv'
dotenv.config()
//////////////////////////////////


const port = process.env.PORT || 3001;

const database = new ConnexionDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ status: 'UP' });
});


//users
app.use('/auth', authRouter);

//users
app.use('/users',auth, userRouter);

//Posts
app.use('/posts',auth, postRouter);

//Albums
app.use('/albums',auth, albumRouter);

//Todos
app.use('/todos',auth, todoRouter);

//Comments
app.use('/comments',auth, commentRouter);

//Comments
app.use('/photos',auth, photoRouter);


database.generateConnexion().then(() => {
    app.listen(port, () => {
        console.log(`Starting Server https://localhost:${port}`);
    });
});
