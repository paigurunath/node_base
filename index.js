// file: index.js
var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var jwt = require('jsonwebtoken');

var models = require("./app/models");
var user = require("./app/models").user;
var app = express();
var routes = require('./app/routes/index')
var NODE_ENV = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, 'app/config', 'config.json'))[NODE_ENV];
var logger = require("./app/utils/logger");
var port = process.env.VCAP_APP_PORT || 3000;

logger.info("Starting server");
// server configurations
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// routs
app.get("/", function (req, res) {
    res.json({message: "Express is up!"});
});
app.use('/secure', routes);


//Sync Database
models
    .sequelize
    .sync()
    .then(function () {
        logger.info('Nice! Database syncup looks fine')
    })
    .catch(function (err) {
        logger.error(err, "Something went wrong with the Database Update!")
    });
// Start server
app.listen(port, function () {
    logger.info('************' + NODE_ENV + '******************');
    logger.info('************' + process.env.VCAP_APP_PORT + '******************');
    logger.info("Server started.");
    logger.info('App Url = http://localhost:3000');
    logger.info('*******************************');

});
