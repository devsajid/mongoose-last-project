const express = require("express");
const brandController = require("../controllers/brand.controller");
const router = express.Router();

router
  .route("/")
  .post(brandController.createBrand)
  .get(brandController.getBrands);
router.route("/:id").get(br);
module.exports = router;
