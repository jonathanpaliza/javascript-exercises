require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const subscribersRouter = require('./routes/subscribers');

mongoose.connect(process.env.DATABASE_URL);

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Databse'));

app.use(express.json());

app.use('/subscribers', subscribersRouter);

app.listen(3000, () => console.log('Server Started'));
