const mongoose = require("mongoose");
const { Users, Vegetables } = require("./schemas");

const UsersModel = mongoose.model("User", Users);
const VegetablesModel = mongoose.model("Vegetables", Vegetables);

module.exports = {
  UsersModel,
  VegetablesModel
};
