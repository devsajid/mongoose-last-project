const express = require("express");
const brandController = require("../controllers/brand.controller");
const router = express.Router();

router.routpost("/", brandController.createBrand);
module.exports = router;
