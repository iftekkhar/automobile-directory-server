import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouters from './routes/posts.js';
import dotenv from "dotenv"


const app = express();
dotenv.config()
app.use(bodyParser.json({ limit: "1mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "1mb", extended: true }));
app.use(cors());
app.use('/cars', postRouters)
app.get('/', (req, res) => {
    res.send('server running fine')
});


const CONNECTION_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.bqcea.mongodb.net/BSCarList?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('server running')))
    .catch(error => console.log(error));

mongoose.set('useFindAndModify', false);