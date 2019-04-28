const { VegetablesModel } = require("../../mongo/models");
const getAllVegetables = () => {
  return VegetablesModel.find({});
};

const getVegetableByName = _name => {
  return VegetablesModel.findOne({ name: _name });
};

module.exports = { getAllVegetables, getVegetableByName };
