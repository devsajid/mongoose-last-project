const express = require("express");
const categoryController = require("../controllers/category.controller");
const router = express.Router();

router
  .route("/")
  .post(categoryController.createCategory)
  .get(categoryController.getCategorys);
router
  .route("/:id")
  .get(storeController.getCategoryById)
  .patch(storeController.updatestore);
module.exports = router;
