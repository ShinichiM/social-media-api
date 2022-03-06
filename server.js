const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require('./routes');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-media-api');

mongoose.set('debug', true);

app.use(routes);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));