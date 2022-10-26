const express = require("express");
const categoryController = require("../controllers/category.controller");
const router = express.Router();

router
  .route("/")
  .post(categoryController.createCategory)
  .get(categoryController.getCategorys);
router
  .route("/:id")
  .get(storeController.gettoreById)
  .patch(storeController.updateStore);
module.exports = router;
