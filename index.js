import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouters from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "1mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(cors());
app.use('/cars', postRouters)


const CONNECTION_URL = 'mongodb+srv://iftekhar:94toOqv02C1v9E8z@cluster0.bqcea.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('server running')))
    .catch(error => console.log(error));

mongoose.set('useFindAndModify', false);