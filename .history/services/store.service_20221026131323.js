const Store = require("../models/Store");
exports.createStoreService = async (data) => {
  const result = await Store.create(data);
  return result;
};
exports.getStoreService = async () => {
  const stores = await Store.find({}).select("-products -suppliers");
  return stores;
};
exports.getCategoryByIdService = async (id) => {
  const category = await Store.findOne({ _id: id });
  return category;
};
exports.updateCategoryService = async (id, data) => {
  const result = await Category.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
