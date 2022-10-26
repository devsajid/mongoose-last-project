const express = require("express");
const categoryController = require("../controllers/category.controller");
const router = express.Router();

router
  .route("/")
  .post(storeController.createCategory)
  .get(categoryController.getCategorys);
router
  .route("/:id")
  .get(storeController.getsStoreById)
  .patch(storeController.updateStore);
module.exports = router;
