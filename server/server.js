import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import route from './routes/route.js';
import cors from 'cors';

//loading config
dotenv.config({path: './config/config.env'});

connectDB();

const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));
app.use('/api/product',route);


const PORT = process.env.PORT || 5000;

app.listen(PORT ,
    console.log(`Server running on port ${PORT}`));
