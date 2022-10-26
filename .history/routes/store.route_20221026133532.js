const express = require("express");
const storeController = require("../controllers/");
const router = express.Router();

router
  .route("/")
  .post(storeController.createStore)
  .get(storeController.getStores);
router
  .route("/:id")
  .get(storeController.getsStoreById)
  .patch(storeController.updateStore);
module.exports = router;
