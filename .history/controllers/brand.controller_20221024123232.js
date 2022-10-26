const {
  createBrandService,
  getBrandService,
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
    const brand = await getBrandService(id);
    if (!brand) {
      return res.status(400).json;
    }
    res.status(200).json({ status: "success", data: brands });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: "fail", error: "couldn't create the brand" });
  }
};
