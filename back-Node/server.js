var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001,
    mongoose = require("mongoose"),
    Models = require("./api/models"),
    cors = require("cors"),
    bodyParser = require ('body-parser');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req,res){
    res.status(404).send({url: req.originalUrl + 'not found'})
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/abc',
{useNewUrlParser: true}).then(() => {
  console.log("Connected !!!")
}).catch(err => {
  console.log(err);
});

app.listen(port);

console.log('todo List RESTful API server started on:!!!!!!!!'+ port);