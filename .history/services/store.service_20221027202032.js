const Store = require("../models/Store");
exports.createStoreService = async (data) => {
  const result = await Store.create(data);
  return result;
};
exports.getStoreService = async () => {
  const stores = await Store.find({}).select("-products -suppliers");
  return stores;
};
exports.getStoreByIdService = async (id) => {
  const store = await Store.findOne({ _id: id });
  return store;
};
exports.updateStoreService = async (id, data) => {
  const result = await Store.updateOne({ _id: id }, data, {
    runValidators: true,
  });
  return result;
};
exports.deleteexports.deleteProductByIdService = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
ByIdService = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};
