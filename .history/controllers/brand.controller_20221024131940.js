const {
  createBrandService,
  getBrandService,
  getBrandByIdService,
  updateBrandService,
} = require("../services/brand.service");

exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);
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
exports.getBrands = async (req, res, next) => {
  try {
    const brands = await getBrandService(req.body);
    res.status(200).json({ status: "success", data: brands });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't create the brand" });
  }
};
exports.getBrandById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const brand = await getBrandByIdService(id);
    if (!brand) {
      return res
        .status(400)
        .json({ status: "fail", error: "Couldn't find brand with this id" });
    }
    res.status(200).json({ status: "success", data: brand });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't grt the brand with this id" });
  }
};
exports.updateBrand = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateBrandService(
      id,

      req.body
    );
    console.log(result);
    if (!result.nModified) {
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
      .json({ status: "fail", error: "couldn't get the brand with this id" });
  }
};
