const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
  username: String,
  password: String,
  vegetableList: Array
});

const Vegetables = new Schema({
  name: String,
  space: String,
  sunlight: String,
  soil: String
});

module.exports = { Users, Vegetables };
