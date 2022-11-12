const {
  createStoreService,
  getStoreService,
  getStoreByIdService,
  updateStoreService,
} = require("../services/store.service");

exports.createStore = async (req, res, next) => {
  try {
    const result = await createStoreService(req.body);
    res
      .status(200)
      .json({ status: "success", error: "Successfully create the brand" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't create the brand" });
  }
};
exports.getStores = async (req, res, next) => {
  try {
    const stores = await getStoreService(req.body);
    res.status(200).json({ status: "success", data: stores });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't create the Category" });
  }
};
exports.getsStoreById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const store = await getStoreByIdService(id);
    if (!store) {
      return res
        .status(400)
        .json({ status: "fail", error: "Couldn't find brand with this id" });
    }
    res.status(200).json({ status: "success", data: store });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't grt the brand with this id" });
  }
};
exports.updateStore = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateStoreService(id, req.body);
    console.log(result);
    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't update the brand with this id",
      });
    }
    res
      .status(200)
      .json({ status: "success", message: "successfully update the brand" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't get the brand withhg this id" });
  }
};
exports.deleteexports.deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductByIdService(id);
    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Coldn't delete the Product",
      });
    } else {
    }
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data can't deleted",
      error: error.message,
    });
  }
};
ById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductByIdService(id);
    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Coldn't delete the Product",
      });
    } else {
    }
    res.status(200).json({
      status: "success",
      message: "Data deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data can't deleted",
      error: error.message,
    });
  }
};
