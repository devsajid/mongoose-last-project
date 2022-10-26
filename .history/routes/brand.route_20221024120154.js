const express = require("express");
const brandController = require("../controllers/brand.controller");
const router = express.Router();

router.route()post("/", brandController.createBrand);
module.exports = router;
