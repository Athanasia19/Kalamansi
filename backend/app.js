const express = require('express');
const app = express();
const cookie = require('cookie-parser')
const cors = require('cors')

const plants = require('./routes/plant');
const auth = require('./routes/auth')

app.use(cors())
app.use(express.json({limit:'50mb'}));

app.use(express.urlencoded({limit: "50mb", extended: true }));
app.use(cookie());

app.use('/api/v1', plants);
app.use('/api/v1', auth);

module.exports = app