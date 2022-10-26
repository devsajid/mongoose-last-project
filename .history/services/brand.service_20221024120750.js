const Brand = require("../models/Brand");
exports.createBrandService = async (data) => {
  const result = await Brand.create(data);
  return result;
};
exports.getBrandService = async () => {
  const bran = await Brand.create(data);
  return result;
};
