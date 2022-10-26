const express = require("express");
const brandController = require("../controllers/brand.controller");
const router = express.Router();

router
  .route("/")
  .post(categoryController.createBrand)
  .get(categoryController.getBrands);
router
  .route("/:id")
  .get(categoryController.getBrandById)
  .patch(brandController.updateBrand);
module.exports = router;
