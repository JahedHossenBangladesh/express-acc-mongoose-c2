const shopService = require("../Services/shop.service");
module.exports.create = async (req, res, next) => {
  try {
    const shop = await shopService.create(req.body);
    return res.status(200).json(shop);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Somethings went wrong" });
  }
};
module.exports.getAll = async (req, res, next) => {
  try {
    const allInfo = await shopService.getAll(res.body);
    return res.status(200).json(allInfo);
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Somethings went wrong in get all" });
  }
};
module.exports.getById = async (req, res, next) => {
  try {
    const singleInfo = await shopService.getById(req.params.id);
    return res.status(200).json(singleInfo);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "somethings wrong in single Id" });
  }
};
