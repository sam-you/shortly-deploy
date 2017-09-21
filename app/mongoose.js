var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var Schema = mongoose.Schema;

exports.urls = new Schema({
    id: Schema.Types.ObjectId,
    url: String,
    timestamp: Date,
    code: String,
    baseUrl: String,
    visits: Number

});
exports.users = new Schema({
    id: Schema.Types.ObjectId,
    password: String,
    username: String
});

