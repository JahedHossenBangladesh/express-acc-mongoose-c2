const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.controller");

router.post("/", shopController.create);
module.exports = router;
