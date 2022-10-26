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
  const store = await Store.findOne({ _id: id });
  return store;
};
exports.updateCategoryService = async (id, data) => {
  const result = await Store.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
