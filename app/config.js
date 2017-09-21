var mongoose = require('mongoose');
mongoose.connect('mongod://localhost/shortlydb');

var db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
  console.log('Mongodb connection is open');
});

module.exports = db;
