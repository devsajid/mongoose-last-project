const express = require("express");
const brandController = require("../controllers/brand.controller");
const router = express.Router();

router
  .route("/")
  .post(categoryController.createC)
  .get(categoryController.getBrands);
router
  .route("/:id")
  .get(categoryController.getBrandById)
  .patch(categoryController.updateBrand);
module.exports = router;
