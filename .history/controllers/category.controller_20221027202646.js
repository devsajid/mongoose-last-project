const {
  createCategoryService,
  getCategoryService,
  getCategoryByIdService,
  updateCategoryService,
  deleteStoreByIdService,
} = require("../services/category.service");

exports.createCategory = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body);
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
exports.getCategorys = async (req, res, next) => {
  try {
    const categorys = await getCategoryService(req.body);
    res.status(200).json({ status: "success", data: categorys });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't create the Category" });
  }
};
exports.getCategoryById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await getCategoryByIdService(id);
    if (!category) {
      return res
        .status(400)
        .json({ status: "fail", error: "Couldn't find brand with this id" });
    }
    res.status(200).json({ status: "success", data: category });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't grt the brand with this id" });
  }
};
exports.updateCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateCategoryService(id, req.body);
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
exports.deleteStoreById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteStoreByIdService(id);
    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Coldn't delete the Store",
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
