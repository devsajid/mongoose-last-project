const Category = require("../models/Category");
exports.createCategoryService = async (data) => {
  const result = await Category.create(data);
  return result;
};
exports.getCategoryService = async () => {
  const categorys = await Category.find({}).select("-products -suppliers");
  return categorys;
};
exports.getBrandByIdService = async (id) => {
  const brand = await Brand.findOne({ _id: id });
  return brand;
};
exports.updateBrandService = async (id, data) => {
  const result = await Brand.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
