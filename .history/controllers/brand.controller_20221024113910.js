const { createBrandService } = require("../services/brand.service");

exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);
    res.status(200).json;
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", error: "couldn't create the brand" });
  }
};
