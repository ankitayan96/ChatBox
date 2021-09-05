const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url =
  "mongodb+srv://ankit_ayan:BABBAN%40123@cluster0.qlyoe.mongodb.net/Chat?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
