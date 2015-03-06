var mongoose = require('mongoose');

var connectionString = process.env.MONGO || 'mongodb://localhost/test';

//mongoose.connect(connectionString)
//var db = mongoose.createConnection(connectionString);
//var db = mongoose.connection;

mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error);

module.exports = db;
