var request = require('request');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var util = require('../lib/utility');
var db = require('../app/config');
var User = require('../app/models/user');
var Link = require('../app/models/link');
var Users = require('../app/collections/users');
var Links = require('../app/collections/links');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/my_database';
var tables = require('../app/mongoose')
exports.signupUser = function(req, res) {
  tables.users.create({
  	username: req.body.username,
    password: password
  }, function (err, awesome_instance) {
  if (err) return handleError(err);
  // saved!
  });
}