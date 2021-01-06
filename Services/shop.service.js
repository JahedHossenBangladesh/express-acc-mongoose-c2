const Shop = require("../models/Shop.model");

module.exports.create = (shop) => {
  return Shop.create(shop);
};
module.exports.getAll = (shop) => {
  return Shop.find(shop);
};
module.exports.gitById = (shop) => {
  return Shop.findById(shop);
};
