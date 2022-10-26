const express = require("express");
const brandController = require("../controllers/brand.controller");
const router = express.Router();

router.route("/").post(caController.createBrand).get(brandController.getBrands);
router
  .route("/:id")
  .get(brandController.getBrandById)
  .patch(brandController.updateBrand);
module.exports = router;
