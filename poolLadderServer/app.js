const express = require('express');
const app = express(); // creates new express instance
const api = require('./api'); // This is our API - we create this folder
const morgan = require('morgan'); //Logger
const bodyParser = require('body-parser');
const cors = require('cors');

// Express (node.js)
app.set('port', (process.env.PORT || 8081)); //Use what we define or else default to 8081

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/api', api);
app.use(express.static('static'));

app.use(morgan('dev'));

app.use(function (req, res) {
    const err = new Error('Not Found');
    err.status = 404;
    res.json(err);
})

//  MongoDB connection 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/poolApp', { useNewUrlParser: true })

// Mongoose connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');

    app.listen(app.get('port'), function () {
        console.log('Mongoose is connected, API Server Listening on port ' + app.get('port') + '!');
    })
})


