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
    console.log("this is singleInfo", singleInfo);
    return res.status(200).json(singleInfo);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "somethings wrong in single Id" });
  }
};

// this is the put
module.exports.updateById = async (req, res, next) => {
  const id = req.params.id;
  const updateField = req.body;
  try {
    const updatedShop = await shopService.updateByIds(id, updateField, {
      new: true,
      runValidators: true,
    });
    return res.status(200).send(updatedShop);
  } catch (e) {
    return res.status(500).json({ message: "somethings wrong in put" });
  }
};
module.exports.deleteById = async (req, res, next) => {
  try {
    await shopService.deleteById(req.params.id);
    return res.status(200).send({ message: "Deleted" });
  } catch (e) {
    return res.status(500).json({ message: "The delete is not done" });
  }
};
