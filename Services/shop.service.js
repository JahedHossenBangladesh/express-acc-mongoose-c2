const { findOneAndUpdate } = require("../models/Shop.model");
const Shop = require("../models/Shop.model");

module.exports.create = (shop) => {
  return Shop.create(shop);
};
module.exports.getAll = (shop) => {
  return Shop.find(shop);
};
module.exports.getById = (shop) => {
  return Shop.findById(shop);
};

module.exports.updateByIds = (updateById, updateField, validation) => {
  return Shop.findOneAndUpdate(updateById, updateField, validation);
};
