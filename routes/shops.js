const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.controller");

router.post("/", shopController.create);
router.get("/", shopController.getAll);
router.get("/test/:id", shopController.getById);
router.put("/:id", shopController.updateById);

module.exports = router;
