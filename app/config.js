var mongoose = require('mongoose');

var connectionString = process.env.CUSTOMCONNSTR_MONGOLAB_URI || 'mongodb://localhost/test';

//mongoose.connect(connectionString)
//var db = mongoose.createConnection(connectionString);
//var db = mongoose.connection;

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error);

module.exports = db;
