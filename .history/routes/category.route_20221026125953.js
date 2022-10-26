const express = require("express");
const categoryController = require("../controllers/brand.controller");
const router = express.Router();

router
  .route("/")
  .post(categoryController.createCategory)
  .get(categoryController.getCategorys);
router
  .route("/:id")
  .get(categoryController.getCategoryById)
  .patch(categoryController.updateCategory);
module.exports = router;
