const express = require("express");
const brandControllers = require("../controllers/brand.controller");
const router = express.Router();
router.post("/", brandControllers.createBrand);
module.exports = router;
