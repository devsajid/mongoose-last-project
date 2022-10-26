const { createBrandService } = require("../services/brand.service");

exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);
    res
      .status(200)
      .json({ status: "success", error: "Successfully create the brand" });
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", error: "couldn't create the brand" });
  }
  console.log(e);
};
