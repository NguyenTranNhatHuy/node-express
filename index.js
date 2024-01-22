const express = require('express'),
    http = require('http');

const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser');
const dishesRouter = require('./routes/dishRouter');
const promotionRouter = require('./routes/promotions')
const leaderRouter = require('./routes/leaders')

const mongoose = require('mongoose');
// const Dishes = reuqire('./models/dishes.js');
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);


const app = express();

// app.use(bodyParser.json());
app.use('/dishes', dishesRouter);
app.use('/promotions', promotionRouter)
app.use('/leaders', leaderRouter)



const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => console.log(err))