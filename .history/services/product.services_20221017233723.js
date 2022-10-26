const Product = require("../models/Product");

exports.getProductsService = async (filters, queries) => {
  const products = await Product.find(filters)
    .skip(query.skip)
    .limit(queries.limit)
    .sort(queries.sortBy)
    .select(queries.fields);
  const total =aw Product.countDocuments(filters);
  // exports.getProductsService = async(limit)=>{
  //   const products =await Product
  //       .where("name").equals(/\w/)
  //       .where("quantity").gt(100).lt(600)
  //       .limit(2).sort({quantity:-1}).limit(+limit)
  return { total, products };
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

exports.updateProductService = async (productId, data) => {
  const result = await Product.updateOne(
    { _id: productId },
    // {$set:data},
    // {$inc:{price:3}},
    { $inc: data },
    {
      runValidators: true,
    }
  );
  return result;
};

exports.bulkUpdateProductService = async (data) => {
  // const result = await Product.updateMany({_id: data.ids}, data,{
  //   runValidators:true
  // });
  const products = [];
  data.ids.forEach((product) => {
    products.push(Product.updateOne({ _id: product.id }, product.data));
  });
  const result = Promise.all(products);
  return result;
};

exports.deleteProductByIdService = async (id) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

exports.bulkDeleteProductService = async (ids) => {
  // const result = await Product.deleteMany({_id:ids});
  const result = await Product.deleteMany({});
  return result;
};
